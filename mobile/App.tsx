import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Router from './src/Router'

export default function App() {
  return (
    <>
      <Router />
      <StatusBar style="auto" />
    </>
  )
}
