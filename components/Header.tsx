import Link from "next/link";
import Style from "../styles/Header.module.scss";
import { useEffect, useState } from "react";
import {graphCms} from "../lib/graphCms"

const Header = () => {
    const [categoryLinks, setCategoryLinks] = useState([])
    useEffect(async () => {
        const {categories} = await graphCms.request(`
        query MyQuery {
            categories {
            color {
                css
            }
            name
            }
        }          
        `)
        setCategoryLinks(categories)
    }, [])
    return (
        <header>
            <div className="container">
                <Link href="/">
                    <a className={Style.logo}>Nemo's Blogs</a>
                </Link>
                <ul>
                {categoryLinks.map((link) => (
                    <li key={link.name}>
                        <Link href={`/${link.name}`}>
                            <a style={{color: link.color.css}}>{link.name}</a>
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
        </header>
    );
}

export default Header;