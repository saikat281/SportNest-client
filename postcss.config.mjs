const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  images:{
    remotePatterns:[{
      protocol:"https",
      hostname: "img.daisyui.com"
    }]
  }
};

export default config;
