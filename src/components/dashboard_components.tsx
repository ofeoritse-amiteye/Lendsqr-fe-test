import { useState,useEffect} from "react";
import Image from "next/image";
import { Filterform } from "./forms";
import { div } from "framer-motion/client";



export default function Sidebar ()
{
  const [selected, setSelected] = useState<string | null>(null);


  const handleSelect = (link: string | null) => {
    setSelected(link);
  };
  
  
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const handleSidebarToggle = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    const linkClass = (link: string | null) => `
      flex items-center px-4 py-2 text-custom2 text-[#213F7D]
      hover:bg-[#39CDCC] hover:bg-opacity-10 hover:text-[#213F7D]
      hover:text-opacity-100 text-opacity-60 
      ${selected === link ? 'border-l-4 border-[#39CDCC] bg-blue-50' : ''}
    `;

    return(

        <div>
        <div className="lg:hidden p-4 text-right">
            <button onClick={handleSidebarToggle} className="text-[#213F7D]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

            <div className="py-2">
              <a href="#" className="px-4 py-2 text-custom2 text-[#213F7D] hover:bg-[#39CDCC] hover:bg-opacity-10 hover:text-[#213F7D] flex items-center font-medium">
              <div className='mr-2'>
                <Image src={"/icons/briefcase.png"} alt='no image' height={10} width={15}/>
              </div>
                Switch organization
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </a>
            </div>
            <div className="py-2">
              <a href="#" className="flex items-center px-4 py-4 text-custom2 text-[#213F7D] hover:bg-[#39CDCC] hover:bg-opacity-10 hover:text-[#213F7D] hover:text-opacity-100 text-opacity-60">
              <div className='mr-2'>
                <Image src={"/icons/home.png"} alt='no image' height={10} width={15}/>
              </div>
                Dashboard</a>
            </div>

            <p className=' px-4 text-custom text-[#545F7D] font-medium '>CUSTOMERS</p>

            <div className="">
              <a href="#" className={linkClass("Users")} onClick={() => handleSelect("Users")} >
              <div className='mr-2'>
                <Image src={"/icons/user-friends.png"} alt='no image' height={10} width={15}/>
              </div>
                Users</a>
            </div>
            <div className="">
              <a href="#" className={linkClass("Guarantors")} onClick={() => handleSelect("Guarantors")}>
              <div className='mr-2'>
              <Image src={"/icons/users_1.png"} alt='no image' height={10} width={15}/>
              </div>
              Guarantors</a>
            </div>
            <div className="">
              <a href="#" className={linkClass("Loans")} onClick={() => handleSelect("Loans")}>
              <div className='mr-2'>
              <Image src={"/icons/sack.png"} alt='no image' height={10} width={15}/>
              </div>
              Loans</a>
            </div>
            <div className="">
              <a href="#" className={linkClass("Decision_Models")} onClick={() => handleSelect("Decision_Models")}>
              <div className='mr-2'>
              <Image src={"/icons/handshake-regular.png"} alt='no image' height={10} width={15}/>
              </div>
                Decision Models</a>
            </div>
            <div className="">
              <a href="#" className={linkClass("Savings")} onClick={() => handleSelect("Savings")}>
              <div className='mr-2'>
              <Image src={"/icons/piggy-bank.png"} alt='no image' height={10} width={15}/>
              </div>
                savings</a>
            </div>
            <div className="">
              <a href="#" className={linkClass("Loan_Requests")} onClick={() => handleSelect("Loan_Requests")}>
              <div className='mr-2'>
              <Image src={"/icons/group.png"} alt='no image' height={10} width={15}/>
              </div>
                Loan Requests</a>
            </div>
            <div className="">
              <a href="#" className={linkClass("Whitelist")} onClick={() => handleSelect("Whitelist")}>
              <div className='mr-2'>
              <Image src={"/icons/user-check.png"} alt='no image' height={10} width={15}/>
              </div>
                Whitelist</a>
            </div>
            <div className="">
              <a href="#" className={linkClass("Karma")} onClick={() => handleSelect("Karma")}>
              <div className='mr-2'>
              <Image src={"/icons/user-times.png"} alt='no image' height={10} width={15}/>
              </div>
                Karma</a>
            </div>

            <p className='text-custom px-4 mt-5 text-[#545F7D] font-medium'>BUSINESSES</p>

            <div className="">
              <a href="#" className={linkClass("Organization")} onClick={() => handleSelect("Organization")}>
              <div className='mr-2'>
              <Image src={"/icons/briefcase.png"} alt='no image' height={10} width={15}/>
              </div>
                Organization</a>
            </div>
            <div className="">
              <a href="#" className={linkClass("Loan_Products")} onClick={() => handleSelect("Loan_Products")}>
              <div className='mr-2'>
              <Image src={"/icons/group.png"} alt='no image' height={10} width={15}/>
              </div>
                Loan Products</a>
            </div>
            <div className="">
              <a href="#" className={linkClass("Savings_Products")} onClick={() => handleSelect("Savings_Products")}>
              <div className='mr-2'>
              <Image src={"/icons/group2.png"} alt='no image' height={10} width={15}/>
              </div>
                Savings Products</a>
            </div>
            <div className="">
              <a href="#" className={linkClass("Fees_and_charges")} onClick={() => handleSelect("Fees_and_charges")}>
              <div className='mr-2'>
              <Image src={"/icons/coins-solid.png"} alt='no image' height={10} width={15}/>
              </div>
                Fees and charges</a>
            </div>
            <div className="">
              <a href="#" className={linkClass("Transactions")} onClick={() => handleSelect("Transactions")}>
              <div className='mr-2'>
              <Image src={"/icons/icon.png"} alt='no image' height={10} width={15}/>
              </div>
                Transactions</a>
            </div>
            <div className="">
              <a href="#" className={linkClass("Services")} onClick={() => handleSelect("Services")}>
              <div className='mr-2'>
              <Image src={"/icons/galaxy.png"} alt='no image' height={10} width={15}/>
              </div>
                Services</a>
            </div>
            <div className="">
              <a href="#" className={linkClass("Service_Account")} onClick={() => handleSelect("Service_Account")}>
              <div className='mr-2'>
              <Image src={"/icons/user-cog.png"} alt='no image' height={10} width={15}/>
              </div>
                Service Account</a>
            </div>
            <div className="">
              <a href="#" className={linkClass("Settlements")} onClick={() => handleSelect("Settlements")}>
              <div className='mr-2'>
              <Image src={"/icons/scroll.png"} alt='no image' height={10} width={15}/>
              </div>
                Settlements</a>
            </div>
            <div className="">
              <a href="#" className={linkClass("Reports")} onClick={() => handleSelect("Reports")}>
              <div className='mr-2'>
              <Image src={"/icons/chart-bar.png"} alt='no image' height={10} width={15}/>
              </div>
                Reports</a>
            </div>

            <p className='text-custom px-4 mt-5 text-[#545F7D] font-medium'>SETTINGS</p>

            <div className="">
              <a href="#" className={linkClass("Preferences")} onClick={() => handleSelect("Preferences")}>
              <div className='mr-2'>
              <Image src={"/icons/sliders-h.png"} alt='no image' height={10} width={15}/>
              </div>
                Preferences</a>
            </div>
            <div className="">
              <a href="#" className={linkClass("Fees_and_Pricing")} onClick={() => handleSelect("Fees_and_Pricing")}>
              <div className='mr-2'>
              <Image src={"/icons/badge-percent.png"} alt='no image' height={10} width={15}/>
              </div>
                Fees and Pricing</a>
            </div>
            <div className="">
              <a href="#" className={linkClass("Audit_Logs")} onClick={() => handleSelect("Audit_Logs")}>
              <div className='mr-2'>
              <Image src={"/icons/clipboard-list.png"} alt='no image' height={10} width={15}/>
              </div>
                Audit Logs</a>
            </div>
        </div>
    )
}

type User = {
  id: string;
  organization: string;
  name: string;
  email: string;
  phone: string;
  date_joined: string;
  status: "Active" | "Inactive" | "Banned"; 
  };
export const Main_content = ()=>
{
    const [users, setUsers] = useState<User[]>([]);
    const [isopened, setisopened] = useState(false)
    const [menuopened, setmenuopened] = useState<string | null>(null);
    const [selectedUser, setSelectedUser] = useState<string | null>(null);

    useEffect(() => {
      async function fetchUsers() {
        try {
          const response = await fetch('https://run.mocky.io/v3/822d0f62-064c-4b2e-a789-0b77e8609c28');
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      }
  
      fetchUsers();
    }, []);

    return(
        <div className='w-custom h-3/4  mt-10  '>
        <p className='text-2xl font-bold text-[#213F7D]'>Users</p>
        <div className='overflow-x-auto' >
        <div className='flex w-full mt-10 mb-10 justify-between min-w-[1000px]'>
          <div className='w-1/5 h-[170px] bg-white shadow-md rounded-md'>
            <div className='p-7'>
              <Image src={'/icons/icon2.png'} alt='no image' height={50} width={50}/>
              <p className=' text-[#213F7D] text-custom mt-3'>USERS</p>
              <p className='text-2xl font-bold text-[#213F7D] mt-1'>2,453</p>
            </div>
          </div>
          <div className='w-1/5 h-[170px] bg-white shadow-md rounded-md'>
            <div className='p-7'>
              <Image src={'/icons/icon1.png'} alt='no image' height={50} width={50}/>
              <p className=' text-[#213F7D] text-custom mt-3'>ACTIVE USERS</p>
              <p className='text-2xl font-bold text-[#213F7D] mt-1'>2,453</p>
            </div>
          </div>
          <div className='w-1/5 h-[170px] bg-white shadow-md rounded-md'>
            <div className='p-7'>
              <Image src={'/icons/icon3.png'} alt='no image' height={50} width={50}/>
              <p className=' text-[#213F7D] text-custom mt-3'>USERS WITH LOANS</p>
              <p className='text-2xl font-bold text-[#213F7D] mt-1'>12,453</p>
            </div>
          </div>
          <div className='w-1/5 h-[170px] bg-white shadow-md rounded-md'>
            <div className='p-7'>
              <Image src={'/icons/icon4.png'} alt='no image' height={50} width={50}/>
              <p className=' text-[#213F7D] text-custom mt-3'>USERS WITH SAVINGS</p>
              <p className='text-2xl font-bold text-[#213F7D] mt-1'>102,453</p>
            </div>
          </div>   
        </div>
      </div>
        <div className='w-full bg-white shadow-md mb-10 p-5'>
        <div className="overflow-auto h-[640px] mb-10">
        <table className="min-w-screen w-[1100px] bg-white rounded-lg">
              <thead>
                <tr className="text-left text-gray-600 font-semibold">
                  <th className="px-4 py-2 border-b">
                  <div className='flex items-center'>
                      ORGANIZATION
                        <button className='ml-2' onClick={() => setisopened(true)} >
                        <Image src={"/icons/sort.png"} alt='no image' height={20} width={20}/>
                      </button>
                    </div>
                  </th>
                  <th className="px-4 py-2 border-b">
                    <div className='flex items-center'>
                      USERNAME
                        <button className='ml-2' onClick={() => setisopened(true)} >
                        <Image src={"/icons/sort.png"} alt='no image' height={20} width={20}/>
                      </button>
                    </div>
                  </th>
                  <th className="px-4 py-2 border-b">
                    <div className='flex items-center'>
                      EMAIL
                        <button className='ml-2' onClick={() => setisopened(true)} >
                        <Image src={"/icons/sort.png"} alt='no image' height={20} width={20}/>
                      </button>
                    </div>
                    </th>
                  <th className="px-4 py-2 border-b">
                    <div className='flex items-center'>
                      PHONE NUMBER
                        <button className='ml-2' onClick={() => setisopened(true)} >
                        <Image src={"/icons/sort.png"} alt='no image' height={20} width={20}/>
                      </button>
                    </div>
                  </th>
                  <th className="px-4 py-2 border-b">
                    <div className='flex items-center'>
                      DATE JOINED
                        <button className='ml-2' onClick={() => setisopened(true)} >
                        <Image src={"/icons/sort.png"} alt='no image' height={20} width={20}/>
                      </button>
                    </div>
                    </th>
                  <th className="px-4 py-2 border-b">
                  <div className='flex items-center'>
                      STATUS
                        <button className='ml-2' onClick={() => setisopened(true)} >
                        <Image src={"/icons/sort.png"} alt='no image' height={20} width={20}/>
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
              {isopened &&
              <div className="absolute z-50 m-3">
                <div className="">
                <button className='h-5 w-5 flex items-center justify-center font-bold text-xl float-right p-5 text-red-600 m-1' onClick={()=>setisopened(false)}>x</button>
                <Filterform/>
                </div>
                </div> 
                }

                {users.map((user)=>(
                <tr key={user.id} className="hover:bg-gray-100">
                <td className="px-4 py-4 border-b">{user.organization}</td>
                <td className="px-4 py-4 border-b">{user.name}</td>
                <td className="px-4 py-4 border-b">{user.email}</td>
                <td className="px-4 py-4 border-b">{user.phone}</td>
                <td className="px-4 py-4 border-b">{user.date_joined}</td>
                <td className="px-4 py-4 border-b"><span className={`py-1 px-3 rounded-full text-xs ${user.status === "Active"? "bg-green-100 text-green-600": user.status === "Inactive"? "bg-gray-200 text-gray-600": "bg-red-100 text-red-600"}`}>{user.status}</span></td>
                <td className="px-4 py-4 border-b">
                  <button className='flex items-center justify-center' onClick={()=> setmenuopened(menuopened === user.id ? null :user.id)}>
                    {menuopened ==user.id && (
                    <div className=" mr-10 absolute z-50 bg-white shadow-md rounded-md">
                    <div className="">
                      <a href="#" className="flex items-center px-4 py-2 text-custom2 text-[#213F7D] hover:bg-[#39CDCC] hover:bg-opacity-10 hover:text-[#213F7D] hover:text-opacity-100 text-opacity-60">
                      <div className='mr-2'>
                      <Image src={"/icons/view.png"} alt='no image' height={10} width={15}/>
                      </div>
                        View details</a>
                    </div>

                    <div className="">
                      <a href="#" className="flex items-center px-4 py-2 text-custom2 text-[#213F7D] hover:bg-[#39CDCC] hover:bg-opacity-10 hover:text-[#213F7D] hover:text-opacity-100 text-opacity-60">
                      <div className='mr-2'>
                      <Image src={"/icons/blacklist.png"} alt='no image' height={10} width={15}/>
                      </div>
                        Blacklist User</a>
                    </div>

                    <div className="">
                      <a href="#" className="flex items-center px-4 py-2 text-custom2 text-[#213F7D] hover:bg-[#39CDCC] hover:bg-opacity-10 hover:text-[#213F7D] hover:text-opacity-100 text-opacity-60"
                        onClick={() => {
                        setSelectedUser(user);
                        setmenuopened(null);
                      }}>
                      <div className='mr-2'>
                      <Image src={"/icons/active.png"} alt='no image' height={10} width={15}/>
                      </div>
                        Activate User</a>
                    </div>

                    </div>
                    )}
                    <Image src={"/icons/dots.png"} alt="no image" height={30} width={25}/></button></td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-[#545F7D]">
                Showing <select className="border border-gray-300 rounded-md px-2 py-1 w-20 bg-[#213F7D] bg-opacity-15 font-bold">
                  <option>100</option>
                  <option>50</option>
                  <option>25</option>
                </select> out of 100
              </div>
              <div className="flex space-x-2  text-[#545F7D]">
                <button className="px-5 py-1"><Image src={"/icons/prev_btn.png"} alt='no image' height={30} width={30}></Image></button>
                <button className="px-3 py-1 font-bold">1</button>
                <button className="px-3 py-1">2</button>
                <button className="px-3 py-1">3</button>
                <span className=''>...</span>
                <button className="px-3 py-1">16</button>
                <button className="px-5 py-1"><Image src={"/icons/next_btn.png"} alt='no image' height={30} width={30}></Image></button>
              </div>
            </div>
        </div>
        </div>
    )
}


export const Userdetails=() =>
{
  return(
    <div className='w-custom h-3/4  mt-10'>

      <div className="w-full flex items-center">
        <div className="mr-2 "><Image src={'/icons/back.png'} alt="no image" height={20} width={30}/></div>
        <p className='text-custom2 text-[#213F7D]'>Back to Users</p>
      </div>
      <div className="w-full h-20 ">
      <p className=' text-[#213F7D] text-2xl font-bold mt-3 float-start '>User Details</p>
        <div className="flex float-end">
        <button className="w-56 h-10 border border-[#E4033B] font-bold text-[#E4033B] flex items-center justify-center rounded-md mr-5 hover:bg-[#E4033B] hover:text-white">
          BLACKLIST USER
        </button>
        <button className="w-56 h-10 border border-[#39CDCC] font-bold text-[#39CDCC] flex items-center justify-center rounded-md hover:bg-[#39CDCC] hover:text-white">
          ACTIVATE USER
        </button>
        </div>
      </div>

      <div className="w-full bg-white shadow-md">

        <div className="flex w-full items-center p-5">
          <div className="mr-5">
            <Image src={"/icons/avatar2.png"} alt="no image" width={120} height={50}/>
          </div>
          <div className="flex">
            <div className="mr-5 border-r-2 border-[#545F7D]">
              <p className="text-[#213F7D] text-2xl font-bold mr-5">Grace Effiom</p>
              <p className="text-custom2 text-[#213F7D]">LSQFf587g90</p>
            </div>
            <div className="mr-5 border-r-2 border-[#545F7D]">
              <p className="text-custom2 text-[#213F7D] mr-5">User`s Tier</p>
              <div className="flex">
                <div className="mr-1">
                  <Image src={"/icons/np_star_1.png"} alt="no image" width={20} height={50}/>
                </div>
                <div className="mr-1">
                  <Image src={"/icons/np_star_2.png"} alt="no image" width={20} height={50}/>
                </div>
                <div>
                  <Image src={"/icons/np_star_2.png"} alt="no image" width={20} height={50}/>
                </div>
              </div>
            </div>
            <div className="mr-5">
              <p className="text-[#213F7D] text-2xl font-bold mr-10">₦200,000.00</p>
              <p className="text-custom2 text-[#545F7D] mr-10">9912345678/providus Bank</p>
            </div>
          </div>
        </div>

        <div className="flex ml-6">
            <a href="" className="mr-5 border-b-2 border-[#39CDCC] w-48 flex justify-center ">
              <p className="text-custom2 text-[#39CDCC]">General Details</p>
            </a>
            <a href="" className="mr-5 w-48 flex justify-center ">
              <p className="text-custom2 ">Dcuments</p>
            </a>
            <a href="" className="mr-5 w-48 flex justify-center ">
              <p className="text-custom2 ">Bank Details</p>
            </a>
            <a href="" className="mr-5  w-48 flex justify-center ">
              <p className="text-custom2 ">Loans</p>
            </a>
            <a href="" className="mr-5 w-48 flex justify-center ">
              <p className="text-custom2 ">savings</p>
            </a>
            <a href="" className="mr-5 w-48 flex justify-center ">
              <p className="text-custom2 ">App and System</p>
            </a>
        </div>
      </div>

      <div className="w-full bg-white shadow-md mt-5 p-5 mb-10">
      <p className="text-custom2 text-[#213F7D] mr-10 font-bold mb-5 ">Personal Information</p>
        <div className="flex flex-wrap border-b-2 border-[[#ecedf0]]">
          <table className="mb-5 w-full">
            <tbody className="">
              <tr className="">
              <td>
                <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">FULL NAME</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">Grace Effiom</p>
                </div>
              </td>
              <td>
                <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">PHONE NUMBER</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">09122072401</p>
                </div>
              </td>
              <td>
              <div className="">
                <p className="text-custom2 text-[#545F7D] mr-10">EMAIL ADDRESS</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">ofeoritseamiteye03@gmail.com</p>
              </div>
              </td>
              <td>
              <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">BVN</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">09016658406</p>
              </div>
              </td>
              <td>
              <div className="">
                <p className="text-custom2 text-[#545F7D] mr-10">GENDER</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">FEMALE</p>
              </div>
              </td>
              </tr>

              <tr>
              <td>
              <div className="mt-10">
                <p className="text-custom2 text-[#545F7D] mr-10">MARITAL STATUS</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">Single</p>
              </div>
              </td>
              <td>
              <div className="mt-10">
                <p className="text-custom2 text-[#545F7D] mr-10">CHILDREN</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">None</p>
              </div>
              </td>
              <td>
              <div className="mt-10">
                <p className="text-custom2 text-[#545F7D] mr-10">TYPE OF RESIDENCE</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">Parent`s Apartment</p>
              </div>
              </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-custom2 text-[#213F7D] mr-10 font-bold mb-5 mt-5">Education and Employment</p>
        <div className="flex flex-wrap border-b-2 border-[[#ecedf0]]">
          <table className="w-full mb-5">
            <tbody>
              <tr className="">
              <td>
                <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">LEVEL OF EDUCATION</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">B.Sc</p>
                </div>
              </td>
              <td>
                <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">EMPLOYMENT STATUS</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">Employed</p>
                </div>
              </td>
              <td>
              <div className="">
                <p className="text-custom2 text-[#545F7D] mr-10">SECTOR OF EMPLOYMENT</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">FinTech</p>
              </div>
              </td>
              <td>
              <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">DURATION OF EMPLOYMENT</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">2 years</p>
              </div>
              </td>
              </tr>

              <tr>
              <td>
              <div className="mt-10">
                <p className="text-custom2 text-[#545F7D] mr-10">OFFICE EMAIL</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">grace@lendsqr.com</p>
              </div>
              </td>
              <td>
              <div className="mt-10">
                <p className="text-custom2 text-[#545F7D] mr-10">MONTHLY INCOME</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">₦200,000-₦400,000</p>
              </div>
              </td>
              <td>
              <div className="mt-10">
                <p className="text-custom2 text-[#545F7D] mr-10">LOAN REPAYMENT</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">₦40,000</p>
              </div>
              </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-custom2 text-[#213F7D] mr-10 font-bold mb-5 mt-5">Socials</p>
        <div className="flex flex-wrap border-b-2 border-[[#ecedf0]]">
          <table className="w-full mb-5">
            <tbody>
              <tr className="">
              <td>
                <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">TWITTER</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">@grace_effiom</p>
                </div>
              </td>
              <td>
                <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">FACEBOOK</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">Grace Effiom</p>
                </div>
              </td>
              <td>
              <div className="">
                <p className="text-custom2 text-[#545F7D] mr-10">INSTAGRAM</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">@grace_effiom</p>
              </div>
              </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-custom2 text-[#213F7D] mr-10 font-bold mb-5 mt-5">Guarantor</p>
        <div className="flex flex-wrap border-b-2 border-[[#ecedf0]]">
          <table className="w-full mb-5">
            <tbody>
              <tr className="">
              <td>
                <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">FULL NAME</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">Debby Ogana</p>
                </div>
              </td>
              <td>
              <div className="">
                <p className="text-custom2 text-[#545F7D] mr-10">PHONE NUMBER</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">07050780922</p>
              </div>
              </td>
              <td>
              <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">EMAIL ADDRESS</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">Debby@gmail.com</p>
              </div>
              </td>
              <td>
              <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">RELATIONSHIP</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">Sister</p>
              </div>
              </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-custom2 text-[#213F7D] mr-10 font-bold mb-5 mt-5"></p>
        <div className="flex flex-wrap border-b-2 border-[#ecedf0]">
          <table className="w-full mb-5">
            <tbody>
              <tr className="">
              <td>
                <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">FULL NAME</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">Debby Ogana</p>
                </div>
              </td>
              <td>
              <div className="">
                <p className="text-custom2 text-[#545F7D] mr-10">PHONE NUMBER</p>
                <p className="text-custom2 text-[#545F7D] mr-10 font-bold">07050780922</p>
              </div>
              </td>
              <td>
              <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">EMAIL ADDRESS</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">Debby@gmail.com</p>
              </div>
              </td>
              <td>
              <div className="">
                  <p className="text-custom2 text-[#545F7D] mr-10">RELATIONSHIP</p>
                  <p className="text-custom2 text-[#545F7D] mr-10 font-bold">Sister</p>
              </div>
              </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}