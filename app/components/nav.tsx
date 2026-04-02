import React, {CSSProperties} from 'react'; 
import { usePathname } from 'next/navigation';
import Link from 'next/link'; 

export default function NavBar() { 
    const pathName = usePathname() 

    const NavText = ({rotation = 0, timing = 300, children} : { 
        rotation?: number; 
        timing?: number; 
        children: React.ReactNode; 
    }) => { 
        const [isHovered, setIsHovered] = React.useState(false); 

        const style: CSSProperties ={ 
            display: 'inline-block',
            backfaceVisibility: 'hidden',
            transform: isHovered ? `rotate(${rotation}deg)` : `rotate(0deg)`,
            transition: `transform ${timing}ms ease, text-decoration-color ${timing}ms ease`,
            textDecoration: 'underline',
            textDecorationColor: isHovered ? '#f7cee0' : 'transparent', 
            textUnderlineOffset: '5px',
            cursor: 'pointer',
        };

        React.useEffect(() => { 
            if (!isHovered) { 
                return; 
            }

            const timeoutId = window.setTimeout(() => { 
                setIsHovered(false)
            }, timing); 

            return () => { 
                window.clearTimeout(timeoutId)
            };
        }, [isHovered, timing]); 
        
        return ( 
             <span onMouseEnter={() => setIsHovered(true)} style={style}>
                {children}
            </span>
        );
    };


    return ( 
            <nav className="font-raleway font-semibold text-xl flex flex-col gap-1 ml-100">
            <Link className={`link ${pathName === '/about' ? 'active' : ''}`} href="/about">
                <NavText rotation={2}> About </NavText> 
            </Link> 
            <Link href="mailto:a33peng@uwaterloo.ca"> 
                <NavText rotation={-2}> Contact </NavText>
            </Link>  
        </nav> 
    ); 
}