import { extendTheme } from "@chakra-ui/react";

export const myTheme = extendTheme({
  colors: {
    primary: {
      100: "#FFB6B9",
      200: "#FAE3D9",
      300: "#BBDED6",
      400: "#61C0BF",
    },
    // secondery: {
    //   100: "#FFB6B9",
    //   200: "#BBDED6",
    //   300: "#FAE3D9",
    //   400: "#FFB6B9",
    // },
  },
  textstyles: {
    h1: {
      fontSize: ["48px", "172px"],
      fontWeight: "bold",
    },

  },
  components: {
    Button: {
      sizes: {
        sm: {
          fontSize: "md",
        },
      },
      variants: {
        base: {
          bg: "primary.100",
          fontSize: "lg",
          fontWeight: "bold",
        },
        sm: {
          bg: "primary.200",
          fontSize: "lg",
          fontWeight: "bold",
        },
        md: {
          bg: "primary.300",
          fontSize: "xl",
          fontWeight: "bold",
        },
        lg: {
          bg: "primary.400",
          fontSize: "xl",
          fontWeight: "bold",
        },
      },
      //   defaultProps: {
      // size: 'lg', // default is md
      // variant: 'bg', // default is solid
      // colorScheme: "#FFB6B9", // default is green
      //   },
    },
    // Text: {
    //   variants: {
    //     base: {
    //       color: "primary.100",
    //       fontSize: "md",
    //     },
    //     sm: {
    //       color: "primary.200",
    //       fontSize: "lg",
    //     },
    //     md: {
    //       color: "primary.300",
    //       fontSize: "xl",
    //     },
    //   },
    // },
    Heading: {
      variants: {
        base: {
          color: "primary.100",
          fontSize: "xl",
        },
        sm: {
          color: "primary.200",
          fontSize: "lg",
        },
        md: {
          color: "primary.300",
          fontSize: "xl",
        },
      },
      //   defaultProps: {
      // size: 'lg', // default is md
      // variant: 'sm', // default is solid
      // colorScheme: "61C0BF", // default is gray
      //   },
    },
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
});
