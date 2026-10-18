const Dashboard = () => {

    const USER_DATA = [
        {
          name:'John',
          status:'available',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0nDCKf3WQaR7alHtPpTG9NQcI4Wfkndq0dFBt_GvxUw&s'
        },
        {
          name:'Mary',
          status:'available',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0nDCKf3WQaR7alHtPpTG9NQcI4Wfkndq0dFBt_GvxUw&s'
        },
        {
          name:'Paul',
          status:'available',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0nDCKf3WQaR7alHtPpTG9NQcI4Wfkndq0dFBt_GvxUw&s'
        },
         {
          name:'Paul',
          status:'available',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0nDCKf3WQaR7alHtPpTG9NQcI4Wfkndq0dFBt_GvxUw&s'
        },
         {
          name:'Paul',
          status:'available',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0nDCKf3WQaR7alHtPpTG9NQcI4Wfkndq0dFBt_GvxUw&s'
        },
         {
          name:'Paul',
          status:'available',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0nDCKf3WQaR7alHtPpTG9NQcI4Wfkndq0dFBt_GvxUw&s'
        }
    ];

    return(
        <div className="flex w-screen">
            <div className="w-[25%] bg-blue-100 h-screen">
              <div className="flex gap-x-2 border items-center justify-center mb-3">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0nDCKf3WQaR7alHtPpTG9NQcI4Wfkndq0dFBt_GvxUw&s" alt="logo" height="50" width="50" className="rounded-full" />
                 <div className="flex flex-col">
                    <p className="text-lg font-semibold">Rabia Zahid</p>
                    <p className="text-sm">My Account</p>
                 </div>
              </div>
              <hr className="bg-gray-200 h-1" />
              <div className="w-[250px] mx-auto ">
                {USER_DATA.map((item) => (
                    <div className="flex gap-x-3 py-4 !border-b border-gray-300 items-center">
                        <img src={item.image} width="35" height="35" className="rounded-full" />
                        <div className="flex flex-col">
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm">{item.status}</p>
                        </div>
                    </div>
                ))}
              </div>
            </div>
            <div className="w-1/2 h-screen border-x-2 border-black">
              B
            </div>
            <div className="w-[25%] bg-pink-200 h-screen">
              C
            </div>
        </div>
    );
}


export default Dashboard;