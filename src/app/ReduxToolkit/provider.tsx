'use client'

import { Provider } from 'react-redux'
import React from 'react'

import store from '@/app/ReduxToolkit/store'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps): JSX.Element => <Provider store={store}>{children}</Provider>
