'use client'

import { 
  LayoutDashboard, FileText, Layout, Image, MessageSquare, 
  Mic, Volume2, Code, Users, CreditCard, Settings, 
  LogOut, X, 
} from 'lucide-react';


const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: <LayoutDashboard size={16} className='text-purple-700' />, label: 'Dashboard', active: true },
    { icon: <FileText size={16} className='text-purple-700'/>, label: 'Documents', active: false }
  ];

  const organizeItems = [
    { icon: <Layout size={16} className='text-purple-700'/>, label: 'Templates' },
    { icon: <Image size={16} className='text-purple-700'/>, label: 'AI Images' },
    { icon: <MessageSquare size={16} className='text-purple-700'/>, label: 'AI Chat' },
    { icon: <Mic size={16} className='text-purple-700'/>, label: 'Speech to Text' },
    { icon: <Volume2 size={16} className='text-purple-700'/>, label: 'Text to Speech' },
    { icon: <Code size={16} className='text-purple-700'/>, label: 'AI Code' }
  ];

  const accountItems = [
    { icon: <Users size={16} className='text-purple-700'/>, label: 'Reseller/Affiliate' },
    { icon: <CreditCard size={16} className='text-purple-700'/>, label: 'Membership' },
    { icon: <FileText size={16} className='text-purple-700'/>, label: 'Transactions' },
    { icon: <Settings size={16} className='text-purple-700'/>, label: 'Account Setting' },
    { icon: <LogOut size={16} className='text-purple-700'/>, label: 'Logout' }
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 bg-opacity-50 z-40 lg:hidden transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <aside className={`fixed lg:sticky top-0 left-0 h-screen bg-white z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } w-56 overflow-y-auto`}>
        <div className="p-4">
          <div className="flex justify-end mb-6">
            <button onClick={onClose} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
              <X size={20} />
            </button>
          </div>

          <nav className="space-y-4">
            <div>
              <h3 className="text-xs font-semibold text-purple-700 mb-2 px-3">My Account</h3>
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg mb-1 transition-colors text-xs ${
                    item.active 
                      ? 'bg-purple-50 text-purple-700 font-medium' 
                      : 'text-black hover:bg-gray-50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div>
              <h3 className="text-xs font-semibold text-purple-700 mb-2 px-3">Organize and Manage</h3>
              {organizeItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-2 px-3 py-1.5 text-gray-700 hover:bg-gray-50 rounded-lg mb-0.5 transition-colors text-xs"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div>
              <h3 className="text-xs font-semibold text-purple-700 mb-2 px-3">Account</h3>
              {accountItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-2 px-3 py-1.5 text-gray-700 hover:bg-gray-50 rounded-lg mb-0.5 transition-colors text-xs"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;