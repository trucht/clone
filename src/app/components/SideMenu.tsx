import Link from 'next/link';
import { IconType } from 'react-icons';
import { 
  FaHome, 
  FaFlag, 
  FaTrophy, 
  FaGift, 
  FaRoad,
  FaSeedling,
  FaStore,
  FaHandHoldingUsd,
  FaChartBar,
  FaCrown,
  FaNewspaper,
  FaQuestionCircle,
  FaHeadset,
  FaClipboardList
} from 'react-icons/fa';

interface NavItem {
  name: string;
  href: string;
  icon: IconType;
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/', icon: FaHome },
  { name: 'Races', href: '/races', icon: FaFlag },
  { name: 'Series Races', href: '/series-races', icon: FaTrophy },
  { name: 'Free Races', href: '/free-races', icon: FaGift },
  { name: 'Tracks', href: '/tracks', icon: FaRoad },
  { name: 'Breeding', href: '/breeding', icon: FaSeedling },
  { name: 'Marketplace', href: '/marketplace', icon: FaStore },
  { name: 'Loan Offers', href: '/loan-offers', icon: FaHandHoldingUsd },
  { name: 'Stats', href: '/stats', icon: FaChartBar },
  { name: '$CROWN', href: '/crown', icon: FaCrown },
  { name: 'News', href: '/news', icon: FaNewspaper },
  { name: 'Learn To Play', href: '/learn', icon: FaQuestionCircle },
  { name: 'Support', href: '/support', icon: FaHeadset },
  { name: 'Changelog', href: '/changelog', icon: FaClipboardList },
];

export default function SideMenu() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block fixed top-[var(--nav-height)] left-0 h-[calc(100vh-var(--nav-height))] 
                      w-[var(--sidebar-width)] bg-[#112240] text-white overflow-y-auto">
        <div className="sticky top-0 bg-[#1a365d] px-4 py-2 text-emerald-500 font-bold z-10">
          LIVE
        </div>
        <nav className="p-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-4 py-3 text-sm hover:bg-[#1a365d] rounded-lg
                       transition-colors group mb-1"
            >
              <item.icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-emerald-500" />
              <span className="text-gray-300 group-hover:text-white">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="h-[var(--footer-height)] md:hidden fixed bottom-0 left-0 right-0 bg-[#112240] border-t border-[#1a365d] z-50">
        <div className="grid grid-cols-4 gap-1 p-2">
          {navigation.slice(0, 4).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center justify-center py-2 text-gray-400 
                       hover:text-emerald-500 transition-colors text-[10px]"
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
} 