import React, { useState } from 'react'
import './Dashboard.css'
import { X, SidebarOpenIcon } from 'lucide-react'

function Dashboard() {
    const [usingSidebar, setSidebar] = useState(true)
    function closeSideBar() {
        setSidebar(false)
    }
    function openSidebar() {
        setSidebar(true)
    }
    return (
        <>
            <div className='container'>
                {usingSidebar && <div className='sidebar'>
                    <div className='top'>
                        <h2>Cerebra</h2>
                        <X size={20} onClick={closeSideBar} />
                    </div>

                    <button>New Session</button>
                    <ul>
                        <li>Calculus Spherical Integration</li>
                        <li>Physics Heisenberg Principle</li>
                        <li>Theory of Computation DFA</li>
                    </ul>
                </div>
                }
                {
                    !usingSidebar && <div className='sidebar-closed'>
                        <SidebarOpenIcon size={20} onClick={openSidebar} />
                    </div>
                }
                <div className='main-content'>
                    <p>Welcome to Cerebra</p>
                    <button>Start a Study Session</button>
                </div>
            </div>
        </>
    )
}

export default Dashboard
