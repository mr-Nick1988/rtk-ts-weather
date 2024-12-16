
import { useDispatch, useSelector } from 'react-redux'
import {RootState} from "@reduxjs/toolkit/query";
import {AppDispatch} from "../configureStore/store.ts";



export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export const useAppSelector = useSelector.withTypes<RootState>()

