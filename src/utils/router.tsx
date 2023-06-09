import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { GroupsPage } from '@pages/Groups';
import { OrdersPage } from '@pages/Orders';
import { ProductsPage } from '@pages/Products';
import { SettingsPage } from '@pages/Settings';
import { UsersPage } from '@pages/Users';

export const PageRoutes: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/orders" />} />

    <Route path="/orders" element={<OrdersPage />} />
    <Route path="/groups" element={<GroupsPage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/users" element={<UsersPage />} />
    <Route path="/settings" element={<SettingsPage />} />
  </Routes>
);
