export default function Join(props) {

  return (
    <section className={props.className}>
      <h3 className={"text-xl font-semibold"} >Join Our Newsletter</h3>
      <form className="" >
        <fieldset >
          <div className="flex flex-col my-[2em] ">
            <label htmlFor="emailForm" className="my-[1em]" >Email<em className="text-red-500">*</em></label>
            <div className="relative w-[80%] " >
              <input placeholder="Enter your email" type="text" id="emailForm" className="w-full border-b-2 border-gray-300 bg-transparent text-gray-300 focus:outline-none focus:border-white peer "/>
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-red-500  transition-all duration-300 peer-focus:left-0 peer-focus:w-full "></span>
            </div>

            <label htmlFor="nameForm" className="my-[1em]">Name<em className="text-red-500">*</em></label>
            <div className="relative w-[80%] " >
              <input placeholder="Enter your name" type="text" id="nameForm" className="w-full border-b-2 border-gray-300 bg-transparent text-gray-300 focus:outline-none focus:border-white peer "/>
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-red-500 transition-all duration-300 peer-focus:left-0 peer-focus:w-full "></span>
            </div>
          </div>

          <div className="flex flex-row pr-[20%] justify-between">
            <div className="flex flex-row align-center" >
              <input type="checkbox" className="appearance-none my-auto w-4 h-4 mr-[0.5em] border border-[#e3f0ff] rounded-sm checked:bg-[#e3f0ff] checked:border-transparent checked:ring-2 transition-all duration-150 checked:ring-blue-500" id="subscribe" name="subscribe" value="yes" />
              <label htmlFor="subscribe" className="pt-[9px]">Subscribe to newsletter</label>
            </div>
            <button type="submit" className="h-[40px] w-[120px] bg-[#053565] hover:text-[#053565] hover:bg-[#e3f0ff] hover:border-2 hover:border-double hover:border-[#053565] transition-all duration-300 ">Submit</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}