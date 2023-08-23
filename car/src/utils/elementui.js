import Vue from 'vue'
import {
  Button,
  Container,
  Aside,
  Main,
  Header,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Input,
  Select,
  Option,
  Row,
  Col,
  Table,
  TableColumn,
  Form,
  FormItem,
  Dialog,
  InputNumber,
  Switch,
  DatePicker,
  Pagination,
  Tag,
  Message,
  MessageBox
} from 'element-ui';


Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Menu)
Vue.use(Header)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Dialog)
Vue.use(InputNumber)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Pagination)
Vue.use(Tag)

Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
