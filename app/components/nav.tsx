import React, {CSSProperties} from 'react'; 

export default function NavBar() { 
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
        <div className="font-raleway font-semibold text-xl ml-100"> 
            <NavText rotation={2}> About </NavText> 
            <a href="mailto:a33peng@uwaterloo.ca"> 
                <NavText rotation={-2}> Contact </NavText>
            </a>  
        </div> 
    ); 
}