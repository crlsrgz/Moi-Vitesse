# Moi

## ViteJS Boilerplate for ReactJS

## Installation

Clone this repo and install using npm

```bash
npm i
```

## Usage

```bash
npm run dev
```

```bash
npm build
```

## Development Feaures

- TailwindCSS
- EsLint
- Prettier

## Dependencies

- master branch
  - react
  - react-dom
- trois branch

## Development Dependencies

- vite
- @vitejs/plugin-react
- tailwindcss
- autoprefixer
- postcss
- @tailwindcss/forms
- eslint
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-react
- eslint-plugin-react-hooks
- prettier
- prettier-plugin-tailwindcss

### Credits

- React and EsLint configuration from this course page [Intro to React](https://react-v8.holt.courses/)
- Tailwind Configuration from
  [Tooabstractive](https://tooabstractive.com/how-to-tech/no-utility-classes-were-detected-in-your-source-files-fixed//)

```bash
npm run dev
```

<style>
  
  h1 {   
    font-size: 2rem;
    padding-left: 1rem;
    background-color: rgba(255,255,255,0);
    background-image: radial-gradient( ellipse farthest-corner at 5px 5px , rgba(200,200,200,0.25), rgba(200,200,200,0.25) 50%, rgba(255,255,255,0.0) 50%);
    background-size: 5px 5px;
    border: none;
    text-shadow: 1px -1px 1px #8e8e8e, -1px 2px 2px #bdbdbd, -2px 4px 2px #dedede;    
    
  }

  h1::before {
    content:"⚡";
    animation: lightning 0.69420s ease-in-out infinite;
  }

	pre {    
	background-color:dimgrey;
	
  }
 
	pre:hover {    
	
	animation: codeblock 4.20s ease-in-out infinite;
  }
 
 
@keyframes codeblock {
  0%{
    
    background-color:dimgray ;
  }
  50%{
    background-color:seagreen;
  }
  100%{
    background-color:dimgray ;
  }
}

 
@keyframes lightning {
  0%{
    
    filter: brightness(100%);   
  }
  50%{
    filter: brightness(125%);   
  }
  100%{
   filter: brightness(100%);   
  }
}


</style>
