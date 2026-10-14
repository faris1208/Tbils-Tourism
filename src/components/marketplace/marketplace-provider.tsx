"use client";
import { createContext, useContext, useMemo, useState } from "react";
const WishlistContext = createContext<{saved:string[];toggle:(slug:string)=>void}>({saved:[],toggle:()=>undefined});
export function MarketplaceProvider({children}:{children:React.ReactNode}){const [saved,setSaved]=useState<string[]>([]);const value=useMemo(()=>({saved,toggle:(slug:string)=>setSaved(x=>x.includes(slug)?x.filter(v=>v!==slug):[...x,slug])}),[saved]);return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>}
export const useWishlist=()=>useContext(WishlistContext);
