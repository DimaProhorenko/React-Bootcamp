import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { createOrder } from '../../services/apiRestaurant';

import Button from '../../ui/Button';
import EmptyCart from '../cart/EmptyCart';

import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import store from '../../store';
import { fetchAddress, getUser } from '../user/userSlice';

import { formatCurrency } from '../../utils/helpers';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const dispatch = useDispatch();
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const username = useSelector((state) => state.user.username);
  const isSubmiting = navigation.state === 'submitting';

  const formErrors = useActionData();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const {
    status: locationStatus,
    position,
    address,
    error,
  } = useSelector(getUser);
  const isLoadingLocation = locationStatus === 'loading';

  const handleGetLocation = () => {
    dispatch(fetchAddress());
  };

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className="container py-6 md:py-8">
      <h2 className="mb-8 text-center text-xl font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST" className="mx-auto max-w-sm space-y-5">
        <div>
          <label className="label">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input"
            defaultValue={username}
          />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required className="input" />
            {formErrors?.phone && (
              <span className="mt-2 block rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formErrors.phone}
              </span>
            )}
          </div>
        </div>

        <div>
          <label>Address</label>
          <div className="relative">
            <input
              type="text"
              name="address"
              required
              className="input"
              disabled={isLoadingLocation}
              defaultValue={address}
            />

            {!position.latitude && !position.longitude && (
              <Button
                type="button"
                disabled={isLoadingLocation}
                size="sm"
                variant="outlineNoBorder"
                className="absolute right-0 top-1/2 block h-full -translate-y-1/2 rounded-l-none border-l border-stone-300"
                onClick={handleGetLocation}
              >
                Get position
              </Button>
            )}
          </div>
          {locationStatus === 'error' && (
            <span className="mt-2 block rounded-md bg-red-100 p-2 text-xs text-red-700">
              {error}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmiting || isLoadingLocation}>
            {isSubmiting ? (
              'Placing order...'
            ) : (
              <span>Order now for {formatCurrency(totalPrice)}</span>
            )}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you';
  }

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
