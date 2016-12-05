import React, {Component} from 'react';
import Like from '-!babel!svg-react!./images/like.svg?name=like';
import Dislike from '-!babel!svg-react!./images/dislike.svg?name=dislike';
import Message from '-!babel!svg-react!./images/message.svg?name=message';
import Close from '-!babel!svg-react!./images/close.svg?name=close';
import Image from '-!babel!svg-react!./images/image.svg?name=image';
import Check from '-!babel!svg-react!./images/check.svg?name=check';
import Skill from '-!babel!svg-react!./images/skill.svg?name=skill';
import WeiChat from '-!babel!svg-react!./images/weiChat.svg?name=weiChat';
import WeiBo from '-!babel!svg-react!./images/weiBo.svg?name=weiBo';
import QQ from '-!babel!svg-react!./images/qq.svg?name=qq';
import GitHub from '-!babel!svg-react!./images/github.svg?name=github';
import Email from '-!babel!svg-react!./images/email.svg?name=email';
import List from '-!babel!svg-react!./images/list.svg?name=list';
import Login from '-!babel!svg-react!./images/login.svg?name=login';
import Logout from '-!babel!svg-react!./images/logout.svg?name=logout';
import Back from '-!babel!svg-react!./images/back.svg?name=back';
import Feather from '-!babel!svg-react!./images/feather.svg?name=feather';
import Lofter from '-!babel!svg-react!./images/lofter.svg?name=lofter';
import UiChina from '-!babel!svg-react!./images/UiChina.svg?name=UiChina';
import Scaner from '-!babel!svg-react!./images/scaner.svg?name=scaner';
import CommentIcon from '-!babel!svg-react!./images/comment.svg?name=comment';
import User from '-!babel!svg-react!./images/user.svg?name=user';
import Pass from '-!babel!svg-react!./images/pass.svg?name=pass';
import DateIcon from '-!babel!svg-react!./images/dateIcon.svg?name=dateIcon';
require('./index.css');

function getComponent(type){
    let childComponent;
    switch (type) {
        case 'like':
            childComponent=<Like />;
            break;
        case 'dislike':
            childComponent=<Dislike />;
            break;
        case 'message':
            childComponent=<Message />;
            break;
        case 'close':
            childComponent=<Close />;
            break;
        case 'image':
            childComponent=<Image />;
            break;
        case 'check':
            childComponent=<Check />;
            break;
        case 'skill':
            childComponent=<Skill />;
            break;
        case 'weiChat':
            childComponent=<WeiChat />;
            break;
        case 'weiBo':
            childComponent=<WeiBo />;
            break;
        case 'QQ':
            childComponent=<QQ />;
            break;
        case 'gitHub':
            childComponent=<GitHub />;
            break;
        case 'lofter':
            childComponent=<Lofter />;
            break;
        case 'UiChina':
            childComponent=<UiChina />;
            break;
        case 'email':
            childComponent=<Email />;
            break;
        case 'list':
            childComponent=<List />;
            break;
        case 'login':
            childComponent=<Login />;
            break;
        case 'logout':
            childComponent=<Logout />;
            break;
        case 'back':
            childComponent=<Back />;
            break;
        case 'feather':
            childComponent=<Feather />;
            break;
        case 'scaner':
            childComponent=<Scaner />;
            break;
        case 'comment':
            childComponent=<CommentIcon />;
            break;
        case 'user':
            childComponent=<User />;
            break;
        case 'pass':
            childComponent=<Pass />;
            break;
        case 'dateIcon':
            childComponent=<DateIcon />;
            break;
    }
    return childComponent;
}

export default class LightIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {type, className} = this.props;
        let childComponent = getComponent(type);
        return (
            <i className={"customerIcon "+className}>
                {childComponent}
            </i>
        );
    }
}