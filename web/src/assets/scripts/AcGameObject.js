const AC_GAME_OBJECTS = [];

export class AcGameObject{
    constructor(){
        AC_GAME_OBJECTS.push(this);
        this.timedelta=0;
        this.has_called_start=false;
    }

    start(){

    }
    update(){

    }
    on_destroy(){//删除前执行

    }
    destroy(){
        this.on_destroy();//函数里所有要用到当前对象的都是this来调用
        for(let i in AC_GAME_OBJECTS){//in遍历下标，of遍历值
            const obj = AC_GAME_OBJECTS[i];
            if(obj===this){
                AC_GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}
//timestamp时间戳
let last_timestamp;

const step =timestamp=>{
    for(let obj of AC_GAME_OBJECTS){
        if(!obj.has_called_start){
            obj.has_called_start=true;
            obj.start();
        }else{
            obj.timedelta=timestamp-last_timestamp;
            obj.update();
        }
    }
    last_timestamp=timestamp;
    
    requestAnimationFrame(step)//英文翻译，返回动画画面
}
requestAnimationFrame(step)