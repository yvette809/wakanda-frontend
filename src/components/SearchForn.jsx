import React, {useRef} from 'react'




function SearchForn({searchValue}) {
    const searchTerm = useRef("");

    const searchEvents =()=>{

        searchValue(searchTerm.current.value)
      }

     const onSubmit= (e)=>{
        e.preventDefault()
        if(searchValue=== ''){
           alert('please enter something')
        }else{
        searchEvents()
        
        }
        }
    return (
        <form onSubmit = {onSubmit}>
            <input type="search" ref = {searchTerm} placeholder = "search Events" onChange= {searchEvents} className="mt-3 event_form"/>
        </form>
    )
}

export default SearchForn
