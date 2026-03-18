import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    // @ts-ignore
    reactCompiler: true,
  },
};

const withMDX = createMDX({});

// We cast to 'any' here if withMDX is struggling with the NextConfig type
export default withMDX(nextConfig as any);