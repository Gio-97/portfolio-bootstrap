 const Navigation = () => {

    
  const scrollToSection = (sectionId) => { 
    const section = document.getElementById(sectionId); 
    section.scrollIntoView({ behavior: 'smooth' }); 
  } 


    return (
        <div>
            {/* <button onClick={ ()=>{ scrollToSection(heroId)}}>Hero</button> 
            <button onclick="scrollToSection('about-meId')">About Me</button>  */}

        </div>
    )

}


export default Navigation