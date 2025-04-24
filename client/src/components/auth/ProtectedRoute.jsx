"use client";
import { api } from "@/utils";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { login } from "@//store/authSlice";


export default function ProtectedRoute({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        api.get("/accounts/me/")
            .then((res) => {
                const user = res.data;
                const data = { user: user };
                dispatch(login(data));
            })
            .catch((err) => {});
        
    }, [dispatch]);

    return <>{children}</>;
}
