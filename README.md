as of August 1st 2023 starting a new nextjs project with a src/app directory:

```
migs:~/nextjs$ npx create-next-app@latest
✔ What is your project named? … nodemailer
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias? … No / Yes
Creating a new Next.js app in /home/migs/nextjs/nodemailer.
```

Simply create a directory inside `src/app/` called api -> `src/app/api/`

inside of `api/` I can add functions for handling http requests as if I were on node:

client side:

```tsx
"use client";
import { useEffect } from "react";

export default function Home() {
  const MakeFetch = async () => {
    const rawRes = await fetch("/api/test");
    console.log(rawRes);
    // const res = await rawRes.json();
    // console.log(res);
  };

  useEffect(() => {
    MakeFetch();
  }, []);

  return (
    <>
      <div>hi</div>
    </>
  );
}
```

node / serverless function on nextjs:

```js
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ name: "miggy" });
}
```
