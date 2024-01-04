# Markdown - In-browser markdown editor 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Create, Read, Update, and Delete markdown documents
- Name and save documents to be accessed as needed
- Edit the markdown of a document and see the formatted preview of the content
- View a full-page preview of the formatted content
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- **Bonus**: Build this project as a full-stack application

### Screenshot

![The home page, showing an example of a markdown file, in the editor, being previewed.](/public/screenshot/screenshot.png)

### Links

(Solution url to be added)
- Solution URL: [Add solution URL here](https://your-solution-url.com)

- Live Site URL: [markdown-editor-md.vercel.app](https://markdown-editor-md.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://styled-components.com/) - For styles
- [MongoDB](https://www.mongodb.com) - Database
- [Mongoose](https://mongoosejs.com) - MongoDB Library
- [Next-Auth](https://next-auth.js.org) - Next.js Authentication/Authorization  
- [Puppeteer](https://pptr.dev/) - Node.js headless browser library
- [react-markdown](https://github.com/remarkjs/react-markdown) Render markdown text to html/react component package
- [Next-Themes](https://www.npmjs.com/package/next-themes) - Next theme package

## What I learned

### Next-auth:

This project lead me to learning about a few different technologies and concepts I hadn't been aware of before. Some I didn't even end up using in this project, but they are still some things I would like to use and learn more about in the future.

To start with, this is only the second project I have used Next-Auth, and the whole concept and how to use is becoming a lot clearer to me now and because of this, I had a lot simpler time setting it up as I had done previously.
For instance, when setting up the credentials provider I had to set the schema of what credentials to sign-in with (We could of also set up an email sign-in credentials) and then, in combination with mongoDB, find the user in the database and sign them in.   

```js
CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "Your-username",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "Your-password",
        },
      },
      async authorize(credentials) {
        try {
          const foundUser = await User.findOne({
            username: credentials.username,
          })
            .lean()
            .exec();
          //
          if (foundUser) {
            const match = await bcrypt.compare(
              credentials.password,
              foundUser.password
            );
            //
            if (match) {
              delete foundUser.password;
              foundUser["role"] = "unverifed Email User";
              return { ...foundUser };
            }
          }
        } catch (error) {
          console.log(error);
        }
        // null = If user isn't found
        return null;
      },
    }),
```

I also learned, with next-auth, how to apply properties to the users tokens when signing in, this is especially useful when applying role based privating routing in your application.  For instance, seeing if someone is a verified email user, to seeing if a user is classed as an admin user. We can then apply logic to define what routes different types of users can access, based on their defined roles.

Heres the basic syntax of how we did that, providing a token that can be access in client components & server ones:

```js
async jwt({ token, user, session }) {
      if (user) {
        return {
          ...token,
          id: user._id || user.id,
          username: user.username || user.name,
          role: user.role,
        };
      }
      return token;
    },
    // (Client Side)
    async session({ session, token, user }) {
      return {
        ...session.user,
        id: token.id,
        username: token.username,
        role: token.role,
      };
    },
```

### Creating a PDF export:

When I was researching on how to implement this feature, I find a lot of different ways of making it. This lead me to finding 3 mains concepts in which it could be done, all using different types of libraries:

- I first found libraries like **jsPDF-html2canvas & html2pdf.js**. These libraries let us screenshot the part of the html content we want and then essentially stamped that screenshot to a pdf. This way wasn't ideal because although it was a pdf, it just a screenshot of the content and not the actual text content itself, so I decided not to use this technique. On top of that, the pdf of the screenshot wasn't great quality and was stretched.

- I tried using a few different libraries like **jspdf, @react-pdf/renderer & react-pdf-html**. These allowed me to generate pdfs on the client, but I had few problems using them for this project and I decided against using them but I feel they could be useful for future projects when needed. The reasons I didn't use them for this project was because the styling wasn't great, they sometimes ignore certain CSS properties and the CSS stlyesheet was also tricky to apply to the pdfs, also they had trouble rendering some html elements like the checkbox input which couldn't be rendered on the PDF. Although the main was reason I didn't use these libraries was because they seemed to be best used when the html content was a set template and wasn't dyanmic like a invoice, receipt or event ticket, where the layout and the stlyes don't change. For this project however, I needed something that could generate PDFs with dynamic html and styles.

- The technology I chose in the end was to use a library called **puppetter**. Puppeteer is a powerful library, that I learned, can be used for many different things like generating PDFs, automate certain different taks like form submissons, testing and more. It can do this because puppetter launchess a headless browser and performs those actions on there.

#### Puppeteer

Puppeteer allowed me to generate the PDF on the backend, using the dynamic html content and styles that had been sent through by an API. Although I found this way to be the easier and more efficient way to generate PDFs, I did have a few problems using it when deploying with vercel. The reason being because puppeteer needs to install and run a headless browser in order to work, it couldn't do this in vercel because of their limitations when hosting.

This lead me to searching for a variety of different solutions, the first solution I found was to deploy the project on render, instead of vercel and use docker and a dockerfile with the deployment. This was my first time learning about docker, and from what I understand, allows you to create a local setup and application inside a container/enviroment, which then can used almost anywhere without the usual hosting limits or enviroment contraints. Sort of like setting up an application on a virtual local machine and can then be tranfered to be used anywhere and run off of that virtual local machine. However I decided not to use this solution because I feel the time needed to learn docker properly was beyond the scope of this project and I had already had the project deployed on vercel at the time, which doesn't allow the project to be deployed with docker.

Although by researching about docker and it's use cases, it has definitely peaked my curiosity and is something I will be learning how to use in the future. Also the prospect of using docker and puppeteer to build powerful applications is an exciting one for me, and something I will be exploring.

The solution I chose in the end was to use browserless, which is a service that lets us use and host a headless browers for us, instead of deploying a headless browser oursleves on the hosting server (vercel in our case). This was the main problem that I was having on vercel and by using browserless I was able to overcome that problem and deploy the project with puppeteer to generate the PDF on vercel.


#### Heres the syntax of setting up the PDF genration:

**The back end API route**
```js
  import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core";

export async function POST(req) {
  try {
    const { htmlContent, currentStyles } = await req.json();
    // 
    const brows = await puppeteer.connect({
      browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BLESS_TOKEN}`,
    });
    //
    const page = await brows.newPage();
    //
    const htmlContentAndStyles = `<style>@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700;800&display=swap); @import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Slab:wght@300;400;500;600;700;800&display=swap); ${currentStyles} </style>${htmlContent}`;
    //
    await page.setContent(htmlContentAndStyles, { waitUntil: "networkidle0" });
    //
    const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });
    //
    await brows.close();
    //
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=generated.pdf",
      },
    });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { msg: "Error creating PDF", error },
      { status: 400 }
    );
  }
}
```

<br>
<br>

**The frontend export PDF button**
```js
import { DownloadPDFIcon } from "../../../../../../public/assets";
import { useTheme } from "next-themes";
import pdfStyles from "@/app/(pdf)/pdfStyles";

const DownloadPdf = ({ setIsDropdownOpen }) => {
  const { resolvedTheme } = useTheme();
  //
  const handlePDFCall = async () => {
    //
    const markdownPreviewHtml =
      document.getElementById("markdown-preview").innerHTML;
    //
    setIsDropdownOpen(false);
    //
    try {
      const res = await fetch("/api/pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          htmlContent: markdownPreviewHtml,
          currentStyles: pdfStyles(resolvedTheme),
        }),
      });
      //
      if (res.ok) {
        // Handle successful response
        console.log("PDF generation request successful");
        // Create a Blob from the response data
        const pdfBlob = await res.blob();
        // Create a link element to trigger the download
        const link = document.createElement("a");
        link.href = URL.createObjectURL(pdfBlob);
        link.download = "generated.pdf";
        // Trigger the download
        link.click();
        // Clean up the URL.createObjectURL
        URL.revokeObjectURL(link.href);
      } else {
        // Handle error response
        console.error("PDF generation request failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      console.log("An error occurred:", error);
    }
  };
  //
  return (
    <li
      className="w-full flex flex-col-reverse gap-2 justify-between items-center smTablet:gap-12 smTablet:flex-row group hover:cursor-pointer"
      onClick={handlePDFCall}
    >
      <p className="w-max text-white group-hover:text-orange">
        Download as PDF
      </p>
      <button>
        <DownloadPDFIcon className="fill-white group-hover:fill-orange" />
      </button>
    </li>
  );
};

export default DownloadPdf;
```


## Continued development

Even though I didn't use it in this project, I did learn about docker, which would of allowed me to set up a puppeteer project in a local enviroment/container. This would of allowed me to set up a more robust application with puppeteer, without any overhead or limitations from any host enviroments.

This really intrested me when I was learning about it, and I will, in the future be learning more about it, and will want to build different projects using it, as it seems like a fun and powerfull technology to use.

### Useful resources

- [browserless blog post](https://www.browserless.io/blog/2023/03/21/puppeteer-vercel) - This blog post on the browserless.io website showed me how to use puppeteer on vercel, which without this, wouldn't of worked when depolying with vercel becasue of the need to run a headless browser in order to generate the pdf export. The solution wasn't perfect, but it allowed me to get it working.

- [Puppeteer Docs](https://pptr.dev) - This is the puppeteer docs, this allowed me to learn how to use it, and what other things it can be used for.

## Author

- Website - [www.djhwebdevelopment.com](https://www.djhwebdevelopment.com)
- Frontend Mentor - [@David-Henery4](https://www.frontendmentor.io/profile/David-Henery4)
- linkedIn - [David Henery](https://www.linkedin.com/in/david-henery-725458241)


