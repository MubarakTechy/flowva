
import React from 'react';
import { LayoutGrid, CheckSquare, BarChart3, Settings, Search, Bell, Plus, Clock, Flame } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', focus: 4 },
  { name: 'Tue', focus: 6 },
  { name: 'Wed', focus: 8 },
  { name: 'Thu', focus: 5 },
  { name: 'Fri', focus: 9 },
  { name: 'Sat', focus: 3 },
  { name: 'Sun', focus: 2 },
];

const Hub: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto flex h-[calc(100vh-80px)] border-x border-black/5">
        {/* Sidebar */}
        <aside className="w-20 lg:w-64 border-r border-black/5 flex flex-col py-8 px-4">
          <div className="space-y-2 flex-grow">
             <SidebarItem icon={<LayoutGrid className="w-5 h-5" />} label="Dashboard" active />
             <SidebarItem icon={<CheckSquare className="w-5 h-5" />} label="Tasks" />
             <SidebarItem icon={<BarChart3 className="w-5 h-5" />} label="Insights" />
             <SidebarItem icon={<Flame className="w-5 h-5" />} label="Streaks" />
          </div>
          <div className="pt-8 border-t border-black/5 space-y-2">
             <SidebarItem icon={<Settings className="w-5 h-5" />} label="Settings" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-8 overflow-y-auto">
          <header className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Good morning, Alex.</h1>
              <p className="text-black/40">You have 5 high priority tasks for today.</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
                <input type="text" placeholder="Search anything..." className="bg-black/5 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-black outline-none w-64" />
              </div>
              <button className="p-2 hover:bg-black/5 rounded-full relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full border-2 border-white"></span>
              </button>
              <div className="w-10 h-10 rounded-full bg-black/10 overflow-hidden border border-black/5">
                <img src="https://picsum.photos/seed/user-4/100/100" alt="avatar" />
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Tasks */}
            <div className="lg:col-span-2 space-y-8">
              <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard label="Deep Focus" value="24.5h" trend="+12%" />
                <StatCard label="Tasks Done" value="142" trend="+8%" />
                <StatCard label="Flow Points" value="4,820" trend="+420" />
              </section>

              <section className="bg-black/5 rounded-3xl p-8">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold">Productivity Trends</h3>
                  <select className="bg-transparent border-none text-sm font-bold opacity-40 outline-none">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                  </select>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorFocus" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#000" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#000" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#00000010" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#00000040'}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#00000040'}} />
                      <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                      <Area type="monotone" dataKey="focus" stroke="#000" strokeWidth={2} fillOpacity={1} fill="url(#colorFocus)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </section>
            </div>

            {/* Right Column: Actions */}
            <div className="space-y-8">
              <section className="bg-black text-white rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6">Today's Focus</h3>
                <div className="space-y-4">
                  <TaskItem title="Redesign Landing Page" category="Design" completed={false} />
                  <TaskItem title="Review PR #204" category="Engineering" completed />
                  <TaskItem title="Weekly Team Sync" category="Meeting" completed={false} />
                  <button className="w-full mt-4 flex items-center justify-center space-x-2 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition-colors">
                    <Plus className="w-4 h-4" />
                    <span className="text-sm font-bold">Add Task</span>
                  </button>
                </div>
              </section>

              <section className="bg-white border border-black/5 rounded-3xl p-8">
                <div className="flex items-center justify-between mb-6">
                   <h3 className="text-xl font-bold">Upcoming Reward</h3>
                   <span className="text-xs font-bold px-2 py-1 bg-black/5 rounded-md">80% Level</span>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-black/5 rounded-xl flex items-center justify-center">
                    <img src="https://picsum.photos/seed/tech/100/100" className="w-10 h-10 rounded-lg" alt="reward" />
                  </div>
                  <div>
                    <h4 className="font-bold">Keychron K2 V2</h4>
                    <p className="text-black/40 text-xs">2,000 points left to go</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-black/5 rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-black"></div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const SidebarItem: React.FC<{ icon: React.ReactNode, label: string, active?: boolean }> = ({ icon, label, active }) => (
  <button className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${active ? 'bg-black text-white shadow-lg' : 'text-black/50 hover:bg-black/5 hover:text-black'}`}>
    {icon}
    <span className="text-sm font-bold hidden lg:block">{label}</span>
  </button>
);

const StatCard: React.FC<{ label: string, value: string, trend: string }> = ({ label, value, trend }) => (
  <div className="bg-white border border-black/5 p-6 rounded-3xl">
    <p className="text-black/40 text-xs font-bold uppercase tracking-widest mb-2">{label}</p>
    <div className="flex items-end justify-between">
      <h4 className="text-3xl font-black tracking-tighter">{value}</h4>
      <span className="text-xs font-bold text-black bg-black/5 px-2 py-1 rounded-md">{trend}</span>
    </div>
  </div>
);

const TaskItem: React.FC<{ title: string, category: string, completed?: boolean }> = ({ title, category, completed }) => (
  <div className="flex items-center justify-between group">
    <div className="flex items-center space-x-3">
      <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${completed ? 'bg-white border-white' : 'border-white/30 group-hover:border-white'}`}>
        {completed && <CheckSquare className="w-3 h-3 text-black" />}
      </div>
      <div>
        <h5 className={`text-sm font-medium ${completed ? 'line-through opacity-40' : ''}`}>{title}</h5>
        <span className="text-[10px] uppercase font-bold opacity-30">{category}</span>
      </div>
    </div>
    {!completed && <Clock className="w-3 h-3 opacity-20" />}
  </div>
);

export default Hub;
