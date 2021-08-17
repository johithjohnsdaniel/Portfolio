import React from 'react'
import Div from '../../Common/Div'
import './Skills.css'

function Skills() {

  let data=' HTML , CSS , BOOTSTRAP ,JAVASCRIPT ,REACT JS, PHP , MYSQL , C , C++ , PYTHON , JAVA  , ANDROID .  '
    return (
        <div className='skill'>
          <Div />

          <div className="skill-info">

              <div className="skill-title">
                Skills
              </div>
              
              <div className="skill-body">
                <div className="skill-detail">
          {data}
                  
                </div>
                <div className="skill-pic">
                  <div className="webdev-pic">
                    <img  className='skill-icon' src={require('../../../Assets/html.png').default} alt="" />
                    <img className='skill-icon' src={require('../../../Assets/react.png').default} alt="" />
                    <img  className='skill-icon'src={require('../../../Assets/php.png').default} alt="" />
                    <img  className='skill-icon' src={require('../../../Assets/mysql.png').default} alt="" />
               

                  </div>
                  <div className="other-pic">
                    <img className='skill-icon' src={require('../../../Assets/python.png').default} alt="" />  
                      <img className='skill-icon' src={require('../../../Assets/java.png').default} alt="" />  
                  </div>
                </div>
              </div>
          
          </div>
        
        </div>
    )
}

export default Skills
