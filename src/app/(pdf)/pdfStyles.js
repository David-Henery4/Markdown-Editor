
const lightTheme = `html,
body {
  background-color: #ffffff;
  font-family: "Roboto Slab", serif;
  color: #7c8187;
  padding: 1.5rem 2.5rem;
}

h1 {
  font-weight: 700;
  font-size: 32px;
  color: #35393f;
}

h2 {
  font-weight: 300;
  font-size: 28px;
  color: #35393f;
}

h3 {
  font-weight: 700;
  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;
  color: #35393f;
}

h4 {
  font-weight: 700;
  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem /* 28px */;
  color: #35393f;
}

h5 {
  font-weight: 700;
  font-size: 1rem /* 16px */;
  line-height: 1.5rem /* 24px */;
  color: #35393f;
}

h6 {
  font-weight: 700;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  color: #e46643;
}

p {
  font-weight: 400;
  font-size: 0.875rem /* 14px */;
  line-height: 1.5rem /* 24px */;
}

blockquote {
  padding: 1.5rem /* 24px */;
  border-radius: 0.25rem /* 4px */;
  border-left-width: 4px;
  border-left-color: #e46643;
  background-color: #f5f5f5;
}

code {
  width: 100%;
  display: inline-block;
  font-weight: 600;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  color: #1d1f22;
}

a {
  font-style: italic;
  color: #e46643;
}
a:hover {
  color: #f39765;
}

li {
  font-family: "Roboto Slab", serif;
  font-weight: 400;
  font-size: 0.875rem /* 14px */;
  line-height: 1.5rem /* 24px */;
}
li::marker {
  color: #e46643;
}

strong{
  font-weight: 700;
  font-size: 0.875rem/* 14px */;
  line-height: 1.5rem/* 24px */;
}

pre{
  width: 100%;
  white-space: pre-wrap;
  padding: 1.5rem/* 24px */;
  margin-top: 1.25rem/* 20px */;
  margin-bottom: 1.25rem/* 20px */;
  overflow-x: auto;
  border-radius: 4px;
  background-color: #F5F5F5;
}

img{
  width: 100%;
}`;

const darkTheme = `html,
body {
  background-color: #151619;
  font-family: "Roboto Slab", serif;
  color: #c1c4cb;
  padding: 1.5rem 2.5rem;
}

h1 {
  font-weight: 700;
  font-size: 32px;
  color: #fff;
}

h2 {
  font-weight: 300;
  font-size: 28px;
  color: #fff;
}

h3 {
  font-weight: 700;
  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;
  color: #fff;
}

h4 {
  font-weight: 700;
  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem /* 28px */;
  color: #fff;
}

h5 {
  font-weight: 700;
  font-size: 1rem /* 16px */;
  line-height: 1.5rem /* 24px */;
  color: #fff;
}

h6 {
  font-weight: 700;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  color: #e46643;
}

p {
  font-weight: 400;
  font-size: 0.875rem /* 14px */;
  line-height: 1.5rem /* 24px */;
}

blockquote {
  padding: 1.5rem /* 24px */;
  border-radius: 0.25rem /* 4px */;
  border-left-width: 4px;
  border-left-color: #e46643;
  background-color: #2b2d31;
  color: #fff;
}

code {
  width: 100%;
  display: inline-block;
  font-weight: 600;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  color: #fff;
}

a {
  font-style: italic;
  color: #e46643;
}
a:hover {
  color: #f39765;
}

li {
  font-family: "Roboto Slab", serif;
  font-weight: 400;
  font-size: 0.875rem /* 14px */;
  line-height: 1.5rem /* 24px */;
}
li::marker {
  color: #e46643;
}

strong{
  font-weight: 700;
  font-size: 0.875rem/* 14px */;
  line-height: 1.5rem/* 24px */;
}

pre{
  width: 100%;
  white-space: pre-wrap;
  padding: 1.5rem/* 24px */;
  margin-top: 1.25rem/* 20px */;
  margin-bottom: 1.25rem/* 20px */;
  overflow-x: auto;
  border-radius: 4px;
  background-color: #2B2D31;
}

img{
  width: 100%;
}`;

const pdfStyles = (theme) => {
  return theme === "dark" ? darkTheme : lightTheme
}

export default pdfStyles