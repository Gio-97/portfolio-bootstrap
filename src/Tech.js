import {Icon} from 'react-icons-kit'
import {html5} from 'react-icons-kit/fa/html5'
import {css3} from 'react-icons-kit/icomoon/css3'


const Tech = () => {
    // const icons = [{html5}, {css3}];
    return(
        <section className='Tech' id='TechId'>
            <h2>Tech Skills</h2>

            <div>
            <Icon size = {50} icon={html5}/>
            <Icon size = {50} icon={css3}/>
            </div>
  
        </section>
       
    )
 
}



export default Tech