import { v4 as uuidv4 } from 'uuid';
import { Inventory } from './Inventory';
import { Orders } from './Orders';
import { Tasks } from './Tasks';
import { Setting } from './Setting';

export class Department {
    id: string;
    name: string;
    inventory: Inventory;
    orders: Orders;
    tasks: Tasks;
    setting: Setting;

    constructor(name: string) {
        this.id = uuidv4();
        this.name = name;
        this.inventory = new Inventory();
        this.orders = new Orders();
        this.tasks = new Tasks();
        this.setting = new Setting();
    }
}