package com.kob.backend.controller.pk;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author lyf
 * @date 2022年08月06日 20:04
 */
@RestController //前后端分离，不返回html，返回数据，所以不用Controller
@RequestMapping("/pk/")
public class BotInfoController {
    @RequestMapping("getbotinfo/")
    public String getBotInfo(){
        return "hhhh";
    }
}
