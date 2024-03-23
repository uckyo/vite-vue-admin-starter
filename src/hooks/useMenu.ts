class Menu {
  isCollapsed = ref(false);
  toggle() {
    console.log("=>(useMenu.ts:5) this.isCollapsed.value", this.isCollapsed.value);
    this.isCollapsed.value = !this.isCollapsed.value;
  }
}
export default new Menu();
