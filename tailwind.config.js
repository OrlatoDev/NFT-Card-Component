tailwind.config = {
    theme: {    
        extend: {
            colors: {
                "softBlue": "#8bacda",
                "cyan": "#00fff7",
                "veryDarkBlue": {
                    100: "#0d192b",
                    200: "#14253d",
                    300: "#14253d"
                },
            },
            screens: {
                "mobile": "375px",
                "desktop": "1440px"
            },
            fontFamily: {
                "sans": ["Outfit", "ui-sans-serif", "system-ui"]
            },
            fontSize: {
                "paragraph": "18px"
            }
        },  
    },  
    plugins: [],
}