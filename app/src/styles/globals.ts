import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

export const CustomStyles = createGlobalStyle`
* {
  ${tw`m-0 p-0 outline-none box-border`};
}
*:focus{
  ${tw`outline-none`};
}
*::selection{
  ${tw`bg-blue-500 bg-opacity-25`};
}
button {
  ${tw`outline-none focus:outline-none`}
}
html, :root{
  ${tw`h-screen w-screen antialiased`}
}

body {
  ${tw`antialiased w-full text-gray-700 overflow-x-hidden font-body`};
}

a {
  ${tw`text-purple-700`};
}

a:hover {
  ${tw`text-purple-500`};
}

.content p {
  ${tw`my-4`};
}

.content p {
  ${tw`my-4 leading-7`};
}

.content h1, .content h3{
  ${tw`font-bold`};
  background: #833184;
  background: -webkit-linear-gradient(to top, #833184 0%, #E9018C 100%);
  background: -moz-linear-gradient(to top, #833184 0%, #E9018C 100%);
  background: linear-gradient(to top, #833184 0%, #E9018C 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

}

.content h1 {
  ${tw`text-3xl text-center`};
}

.content h3 {
  ${tw`text-2xl`};
}

.content h5 {
  ${tw`text-lg text-blue-500 font-bold`};
}

.content ul {
  ${tw`my-6`};
}

.scroll-top {
  background: #833184;
  background: -webkit-linear-gradient(to top, #833184 0%, #E9018C 100%);
  background: -moz-linear-gradient(to top, #833184 0%, #E9018C 100%);
  background: linear-gradient(to top, #833184 0%, #E9018C 100%);
  ${tw`rounded-full w-12 h-12 shadow-lg text-white flex items-center justify-center`};
}

.collapse {
  ${tw`bg-white shadow-lg md:shadow-none w-full pt-2 pb-4 absolute -mt-2 top-20 invisible transition-all ease-linear duration-300 opacity-0 md:opacity-100 md:relative md:p-4 md:visible md:block md:bg-transparent md:m-0 md:top-0 z-10`};
}
.collapse.show{
  ${tw`visible opacity-100`};
}

section {
  min-height: 600px;
}

.orb_canvas {
  ${tw`absolute top-0 left-0 w-full pointer-events-none`};
  background: linear-gradient(360deg, #DAB8DB 0%, #FFFFFF 87.29%);
  z-index: -1;
}

`
