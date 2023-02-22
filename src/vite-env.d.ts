declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGElement>>;
  const content: string;
  export default content;
}

/// <reference types="vite/client" />
