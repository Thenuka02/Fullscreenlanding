import React from "react";
import bgimage from '../image/beachshowcase.jpg';
import './homepage.css';

const Homepage = () =>{
return(
    <div id="image" className="main">
     {/* <h1>Welcome To The Beach</h1>   
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
         Modi officiis ipsum officia numquam expedita ullam.</p> */}
    <div className='background'> 
     <img src={bgimage} alt='sample beach image' /> 
     <div className="center">
    <h1>Welcome To The Beach</h1>   
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officiis ipsum officia numquam expedita ullam.</p>
    <button className="button">Read more</button>
    </div> 
    </div>
    <div className="paragraph-a">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus impedit maxime, quae soluta quis cumque perferendis! Doloribus quaerat, placeat iste facere, aspernatur ex cum veritatis laudantium, officia, non porro exercitationem incidunt quis dolore? Officia ex accusamus expedita optio, voluptatem minus? 
        In maiores omnis aperiam earum ab molestiae beatae laborum blanditiis incidunt, delectus dolor, 
        id voluptates optio aspernatur aliquam saepe atque labore? Tempore reprehenderit ab ipsam perspiciatis ut, provident perferendis sapiente in numquam blanditiis, enim, illo error nulla incidunt quos quidem ratione repellat ipsa molestias veritatis? Mollitia, fugit dolore commodi porro repudiandae atque, eos, ipsum quam culpa fuga deleniti quae.
        </p>
    </div>
    <div className="paragraph-b">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus impedit maxime,
         quae soluta quis cumque perferendis! Doloribus quaerat, placeat iste facere, aspernatur ex cum veritatis laudantium, officia, non porro exercitationem incidunt quis dolore? Officia ex accusamus expedita optio, voluptatem minus? In maiores omnis aperiam earum ab molestiae beatae laborum blanditiis incidunt, delectus dolor, id voluptates optio aspernatur aliquam saepe atque labore? Tempore reprehenderit ab ipsam perspiciatis ut, provident perferendis sapiente in numquam blanditiis, enim, illo error nulla incidunt quos quidem ratione repellat ipsa molestias veritatis? 
        Mollitia, fugit dolore commodi porro repudiandae atque, eos, ipsum quam culpa fuga deleniti quae.   
        </p>
    </div>
    <div className="row">
        <div className="box a">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus impedit maxime,
        quae soluta quis cumque perferendis! Doloribus quaerat, placeat iste facere, aspernatur ex cum veritatis laudantium, officia, non porro exercitationem incidunt quis dolore? Officia ex accusamus expedita optio, voluptatem minus? In maiores omnis aperiam earum ab molestiae beatae laborum blanditiis incidunt, delectus dolor, id voluptates optio aspernatur aliquam saepe atque labore? Tempore reprehenderit ab ipsam perspiciatis ut, provident perferendis sapiente in numquam blanditiis, enim, illo error nulla incidunt quos quidem ratione repellat ipsa molestias veritatis? 
        Mollitia, fugit dolore commodi porro repudiandae atque, eos, ipsum quam culpa fuga deleniti quae.  
        </p>
        </div>
        <div className="box b">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus impedit maxime,
        quae soluta quis cumque perferendis! Doloribus quaerat, placeat iste facere, aspernatur ex cum veritatis laudantium, officia, non porro exercitationem incidunt quis dolore? Officia ex accusamus expedita optio, voluptatem minus? In maiores omnis aperiam earum ab molestiae beatae laborum blanditiis incidunt, delectus dolor, id voluptates optio aspernatur aliquam saepe atque labore? Tempore reprehenderit ab ipsam perspiciatis ut, provident perferendis sapiente in numquam blanditiis, enim, illo error nulla incidunt quos quidem ratione repellat ipsa molestias veritatis? 
        Mollitia, fugit dolore commodi porro repudiandae atque, eos, ipsum quam culpa fuga deleniti quae.  
        </p>
        </div>
        <div className="box c">
        <p>   
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus impedit maxime,
        quae soluta quis cumque perferendis! Doloribus quaerat, placeat iste facere, aspernatur ex cum veritatis laudantium, officia, non porro exercitationem incidunt quis dolore? Officia ex accusamus expedita optio, voluptatem minus? In maiores omnis aperiam earum ab molestiae beatae laborum blanditiis incidunt, delectus dolor, id voluptates optio aspernatur aliquam saepe atque labore? Tempore reprehenderit ab ipsam perspiciatis ut, provident perferendis sapiente in numquam blanditiis, enim, illo error nulla incidunt quos quidem ratione repellat ipsa molestias veritatis? 
        Mollitia, fugit dolore commodi porro repudiandae atque, eos, ipsum quam culpa fuga deleniti quae.  
        </p>
        </div>
    </div>
    </div>
);
}

export default Homepage;