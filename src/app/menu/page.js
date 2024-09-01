import { fetchData } from "../api"

export default function FlowerMenu(params) {
    return(
        <>
  <div className="py-12 bg-yellow-100 ">
    <div className="container mx-auto text-center bg-yellow-100 ">
      <h2 className="text-4xl font-bold mb-8 text-blue-950">Daily Flower Menu</h2>

      <div id="sort-products" className="flex flex-row justify-between mb-6 mx-6 xl:mx-12"> <label>Sort <select id="sort">
          <option>Feature</option>
          </select></label>
          
        <h2>Products</h2>  
      </div>
    </div>

    <div className="mx-auto mb-[200px] grid justify-center justify-items-center max-w-7xl gap-x-6 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 mt-8 ">
    <a href="#" className="block hover:underline">
    <img 
        src="https://i.pinimg.com/564x/08/cf/c1/08cfc11b52219ca75e28540e27c89831.jpg" 
        className="h-80 w-72 object-cover duration-500 hover:scale-105 hover:shadow-xl"
    />
    <div className="px-4 py-3 w-72">
        <p className="text-lg font-bold text-black truncate block capitalize border-b-2 border-transparent hover:border-custom-bg-black">
            Product Name
        </p>
        <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>

        </div>


    </div>
</a>

        <a href="#">
            <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product" className="h-80 w-72 object-cover duration-500 hover:scale-105 hover:shadow-xl" />
            <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                </div>
            </div>
        </a>
        <a href="#">
            <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product" className="h-80 w-72 object-cover duration-500 hover:scale-105 hover:shadow-xl" />
            <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                </div>
            </div>
        </a>
       </div>
      
      
  </div>   

        </>
    )
}