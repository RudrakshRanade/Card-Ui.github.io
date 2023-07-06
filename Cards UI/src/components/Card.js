import React from "react";
import {FcLike , FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Card = (props) => {

let course = props.course;
let Likedcourses = props.Likedcourses;
let setLikedcourses = props.setLikedcourses;

function clickHandler() {
    //logic
    if(Likedcourses.includes(course.id)) {
        //pehle se like hua pada tha
        setLikedcourses( (prev) => prev.filter((cid)=> (cid !== course.id) )  );
        toast.warning("like removed");
    }
    else {
        //pehle se like nahi hai ye course
        //insert karna h ye course liked courses me 
        if(Likedcourses.length === 0 ) {
            setLikedcourses([course.id]);
        }
        else {
            //non-empty pehle se
            setLikedcourses((prev) => [...prev, course.id]);
        }
        toast.success("Liked Successfully");
    }
}

    return(
        <div className="w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80" >

<div className="relative">
    <img src={course.image.url} alt="" />

<div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[0] grid place-items-center">
    <button onClick={clickHandler} >
    {
                        Likedcourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                    }
    </button>
</div>
</div>

<div className="py-4">
    <p className="text-white mx-4 font-semibold text-lg leading-6">{course.title}</p>
    <p className='mx-4 mt-2 text-white'>
        { course.description.length>100 ? ( course.description.substr(0 , 100) + "..." ) : (course.description) + "..." }
        </p>
</div>

        </div>
    )
}

export default Card;