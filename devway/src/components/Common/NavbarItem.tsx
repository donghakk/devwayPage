function SidebarItem({ menu }: any) {
  return (
    <div className="sidebar-item">
      <p>{menu.name}</p>
    </div>
  );
}

export default SidebarItem;
