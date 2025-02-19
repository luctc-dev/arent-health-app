import { createAction } from '@reduxjs/toolkit'
export const ACT_SET_LOGIN = 'ACT_SET_LOGIN'


export const actSetLogin = createAction<boolean>(ACT_SET_LOGIN)