﻿import React, { useState } from 'react';
import { Button, Input } from 'antd';
import {
  GithubFilled,
  QuestionCircleFilled,
  InfoCircleFilled,
  SearchOutlined,
  PlusCircleFilled,
  CrownFilled,
  SmileFilled,
  TabletFilled,
} from '@ant-design/icons';

import { ProLayout, PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

export default () => {
  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <ProLayout
      collapsed={true}
      collapsedButtonRender={false}
      layout="side"
      route={{
        routes: [
          {
            path: '/welcome',
            name: '欢迎',
            icon: <SmileFilled />,
            component: './Welcome',
          },
          {
            path: '/admin',
            name: '管理',
            icon: <CrownFilled />,
            access: 'canAdmin',
            component: './Admin',
          },
          {
            path: '/list',
            name: '列表',
            icon: <TabletFilled />,
            access: 'canAdmin',
            component: './Admin',
          },
        ],
      }}
      location={{
        pathname,
      }}
      menu={{
        type: 'group',
        collapsedShowTitle: true,
      }}
      avatarProps={{
        src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        size: 'small',
        title: '七妮妮',
      }}
      actionsRender={(props) => {
        if (props.isMobile) return [];
        return [
          props.layout !== 'side' ? (
            <div
              key="SearchOutlined"
              aria-hidden
              style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: 24,
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <Input
                style={{
                  borderRadius: 4,
                  marginRight: 12,
                  backgroundColor: 'rgba(0,0,0,0.03)',
                }}
                prefix={
                  <SearchOutlined
                    style={{
                      color: 'rgba(0, 0, 0, 0.15)',
                    }}
                  />
                }
                placeholder="搜索方案"
                bordered={false}
              />
              <PlusCircleFilled
                style={{
                  color: 'var(--ant-primary-color)',
                  fontSize: 24,
                }}
              />
            </div>
          ) : undefined,
          <InfoCircleFilled key="InfoCircleFilled" />,
          <QuestionCircleFilled key="QuestionCircleFilled" />,
          <GithubFilled key="GithubFilled" />,
        ];
      }}
      menuFooterRender={() => {
        return (
          <p
            style={{
              textAlign: 'center',
              paddingTop: 12,
            }}
          >
            Power by Ant Design
          </p>
        );
      }}
      onMenuHeaderClick={(e) => console.log(e)}
      menuItemRender={(item, dom) => (
        <a
          onClick={() => {
            setPathname(item.path || '/welcome');
          }}
        >
          {dom}
        </a>
      )}
    >
      <PageContainer
        extra={[
          <Button key="3">操作</Button>,
          <Button key="2">操作</Button>,
          <Button key="1" type="primary">
            主操作
          </Button>,
        ]}
        footer={[
          <Button key="3">重置</Button>,
          <Button key="2" type="primary">
            提交
          </Button>,
        ]}
      >
        <ProCard
          style={{
            height: '200vh',
            minHeight: 800,
          }}
        >
          <div />
        </ProCard>
      </PageContainer>
    </ProLayout>
  );
};
