"use client";

import { AppAssets, AppRoutes, AppSegments } from "@config/constants";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const Header = () => {
    const segment = useSelectedLayoutSegment();

    if (segment === AppSegments.posts)
        return (
            <header>
                <Link
                    href={AppRoutes.home}
                    className="flex flex-col items-center justify-center"
                >
                    <Image
                        src={AppAssets.profile}
                        className="rounded-full cursor-pointer"
                        alt="profile pic"
                        height={108}
                        width={108}
                    />
                    <h2 className="pt-4 pb-6 text-3xl hover:underline cursor-pointer font-bold">
                        Username
                    </h2>
                </Link>
            </header>
        );

    return (
        <header className="flex flex-col items-center justify-center">
            <Image
                src={AppAssets.profile}
                className="rounded-full"
                alt="profile pic"
                height={144}
                width={144}
            />
            <h1 className="pt-4 pb-6 text-4xl font-extrabold">Username</h1>
        </header>
    );
};

export default Header;
