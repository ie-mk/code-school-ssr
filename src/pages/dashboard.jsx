import React from 'react';
import Dashboard from '../components/pages/dashboard/Dashboard';
import ErrorBoundary from '../components/ErrorBoundary';
import needsLoginWrapper from '../utils/needsLoginWrapper';

const DashboardPage = () => (
  <ErrorBoundary>
    <Dashboard />
  </ErrorBoundary>
);

export default needsLoginWrapper(DashboardPage);
