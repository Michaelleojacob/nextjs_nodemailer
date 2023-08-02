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

Simply create a directory inside `src/` called api -> `src/pages/api` ON THE SAME LEVEL as `src/app`

```
-./
  -src
    -app
    -pages
```

inside of `api/` I can add functions for handling http requests as if I were on node:

client side:

```tsx
"use client";
import { useEffect } from "react";

export default function Home() {
  const MakeFetch = async () => {
    try {
      const raw1 = await fetch("/api/test");
      const res1 = await raw1.json();
      console.log(res1);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    MakeFetch();
  }, []);

  return (
    <>
      <button onClick={MakeFetch}>refetch</button>
    </>
  );
}
```

node / serverless function on nextjs:

```js
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // console.log(req);
  return res.status(200).json({ name: "miggy" });
};

export default handler;
```
