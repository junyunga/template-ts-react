import * as React from 'react';
import './index.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import SubMenuList from 'core/components/header/sub_menu_list';
// RouteComponentProps


interface Menu {
    listInfo: any[]
}
const menu: Menu = {
    listInfo: [{
        show: false,
        title: 'Sonlution&Service',
        path: '/solution',
        list: [{
            title: 'Solution Map',
            list: []
        }, {
            title: 'SaaS 솔루션',
            list: []
        }, {
            title: '데이터 보안',
            list: ['화면 보안', '모바일 보안', '멀티미디어 보안', 'PC 영역 보안']
        }, {
            title: '보안 관제',
            list: ['웹 사이트 보안']
        }]
    }, {
        show: false,
        title: 'CustomerCenter',
        path: '/customer',
        list: [{
            title: '제품문의',
            list: []
        }, {
            title: 'Contact Us',
            list: []
        }]
    }, {
        show: false,
        title: 'PR',
        path: '/pr',
        list: [{
            title: '뉴스 및 공지',
            list: []
        }, {
            title: '뉴스레더',
            list: []
        }, {
            title: '광고',
            list: []
        }, {
            title: '도입사례',
            list: []
        }, {
            title: '사내소식',
            list: []
        }]
    }, {
        show: false,
        title: 'Company',
        path: '/company',
        list: [{
            title: '회사소개',
            list: []
        }, {
            title: 'CEO메시지',
            list: []
        }, {
            title: 'Award',
            list: []
        }, {
            title: '인재채용',
            list: []
        }, {
            title: '오시는 길',
            list: []
        }]
    }]
}

export default class HeaderLayout extends React.Component {
    public submenuShow = () => {
        console.log("111")
    }
    public render() {
        return (

            <header className="header">
                <Router>
                    <div className="header__inner">
                        <div className="logo">
                            <Link to="/"><img src="" alt="회사로고" /></Link></div>
                        <nav>
                            <ul className="area">
                                {
                                    menu.listInfo.map(item => {
                                        return (
                                            <li className="area-list" key={item.title} onMouseOver={this.submenuShow}>
                                                <Link to={item.path}>{item.title}</Link>
                                                <SubMenuList displayState={item.show} submenu={item.list} subtitle={item.title} />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                </Router>
            </header>
        );
    }
}