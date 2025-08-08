import React from 'react'
import { Sidebar } from '../components/SideBar'
// import { Navbar } from '../components/Navbar'
import { DashNav } from '../components/DashboardNavbar'
import { Card } from '../components/Card'
import { UserCard } from '../components/useCard'
import { AskBrain } from '../components/AskBrain'

export const Dashboard = () => {
  return (
  <div >
    <DashNav />
    <div className='h-96'>
     <AskBrain />
    </div>
    <div className='mx-55 pl-10 p-3 grid grid-cols-3 gap-3 justify-center items-center px-5'>
    <UserCard  title='testfdsafdsfddfs' type='Text' link='https:///' tags={['#ajdj']} />
    <UserCard  title='test' type='Text' link='https:///' tags={['#ajdj']} />
    <UserCard  title='test' type='Video' link='https:///' tags={['ajdj']} />
    <UserCard  title='test' type='Video' link='https:///' tags={['ajdj']} />
    <UserCard  title='test' type='Video' link='https:///' tags={['ajdj']} />
    <UserCard  title='test' type='Video' link='https:///' tags={['ajdj']} />
    <UserCard  title='test' type='Video' link='https:///' tags={['ajdj']} />
    <UserCard  title='test' type='Video' link='https:///' tags={['ajdj']} />
    </div>
  </div>
  )
}
