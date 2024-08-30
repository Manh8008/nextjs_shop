"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const withAdminAuth = (WrappedComponent) => {
    const Wrapper = (props) => {
        const router = useRouter();
        const userInfo = useSelector((state) => state.user.userInfo);

        useEffect(() => {
            if (!userInfo || userInfo.role !== "admin") {
                router.push("/");
            }
        }, [userInfo, router]);

        if (!userInfo || userInfo.role !== "admin") {
            return null;
        }

        return <WrappedComponent {...props} />;
    };

    return Wrapper;
};

export default withAdminAuth;
