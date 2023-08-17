import requests from '@/utils/http'

export default {
    uploadLog(data: object) {
        return requests({
            url: '/log/upload',
            method: 'post',
            data,
        })
    },
    getLog(params: object) {
        return requests({
            url: '/log/query',
            method: 'get',
            params,
        })
    },
    queryLog(data: object) {
        // return requests({
        //     url: '/log/query',
        //     method: 'post',
        //     data,
        // })
        console.log('data--', data)
        return {
            data: [
                {
                    id: 1,
                    logTime: '2023-08-14T18:22:12',
                    type: 'INFO',
                    content:
                        'com.zetyun.sinkops.BatchOperation                            [] - updateAfter: {termostype=PCDH5WebViewController, productid=PCDH5WebViewController|mdButton_EventTouchUpInside:withEvent:, behaviorstatus=-, language=follow_system_zh-Hans-CN, userid=14936158510, refviewid=-, resolution=1290*2796, behaviortype=NebulaTech, alipayproductid=161BC41281604_IOS-uat1, user_sessionid=-, producertype=c, inner_version=-, utdid=Y41HzF2GQgcDAJduUmZToqle, lbslabel=-, cpu_max_freq=-, version=3, app_channel=-, requestid=-, thread_name=-, termtype=PCDH5WebViewController, subapplicationversion=-, server_location=ip=183.195.2.234^country=�й�^province=�Ϻ�^city=�Ϻ�^district=XX^isp=�ƶ�^header=H5-VM, analysis_code=348, alipayproductversion=7.2.8, seed=H5_AL_JSAPI_RESULT_ERROR, device_model=iPhone15 3, behaviorid=clicked, behaviorstatusmsg=https://20221004.uat1_mbank.bosc.com/fncD709Pro/redeem/reInput.html|https://20221004.uat1_mbank.bosc.com/fncD709Pro/redeem/reInput.html__Y41HzF2GQgcDAJduUmZToqle__OdpaFNh_, subapplicationid=20221004, total_mem=-, productversion=Adb22d7e658b88e6beb2c92009071dbac, network=WIFI|�й��ƶ�, viewid=-, lbslocation=-, hot_patch=-, exinfo3=jsapiName=getUserInfoEx^params=^code=1^msg=�ӿڲ�����, exinfo4=appId=20221004^version=0.0.0.55^url=https://20221004.uat1_mbank.bosc.com/fncD709Pro/redeem/reResult.html^referer=https://20211004.uat1_mbank.bosc.com/financial/financialList/home.html^h5Token=6ed3561fc2308fdee7fdd3fc19fc74a0^isEntrance=NO^refviewId=PCDH5WebViewController^h5SessionToken=2e6751f113f161d2a9a1aaedeef70261^log_release_type=ONLINE^sourceId=20211004^token=Adb22d7e658b88e6beb2c92009071dbac^isTinyApp=NO^viewId=PCDH5WebViewController^webViewVersion=WKWebView^mp_baseline=v10.2.3.11^mp_module=NebulaTech, exinfo1=https://20221004.uat1_mbank.bosc.com/fncD709Pro/redeem/reResult.html, exinfo2=-, os_version=16.0.3, productchannel=1000, log_time=2023-08-14 18:22:07.935, url=2, bundle_version=VoiceOver=0^TimeZone=Asia/Shanghai, tcid=Y41HzF2GQgcDAJduUmZToqle, awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-08-14 18:22:07:221, cpu_core_num=-, promotion=-, commit_ts=null, serialize_ts=null, etl_ts=1692008532103}234344234awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-0',
                    createDate: '2023-08-16T16:50:37',
                    updateDate: '2023-08-16T16:50:37',
                },
                {
                    id: 2,
                    logTime: '2023-08-14T18:22:12',
                    type: 'ERROR',
                    content:
                        'com.zetyun.sinkops.KuduSinkAction                            [] - Exception',
                    createDate: '2023-08-16T16:50:37',
                    updateDate: '2023-08-16T16:50:37',
                },
                {
                    id: 3,
                    logTime: '2023-08-14T18:22:12',
                    type: 'ERROR',
                    content:
                        'com.zetyun.sinkops.KuduSinkAction                            [] - java.lang.NullPointerException',
                    createDate: '2023-08-16T16:50:38',
                    updateDate: '2023-08-16T16:50:38',
                },
                {
                    id: 4,
                    logTime: '2023-08-14T18:22:12',
                    type: 'ERROR',
                    content:
                        'com.zetyun.sinkops.KuduSinkAction                            [] - Exception',
                    createDate: '2023-08-16T16:50:39',
                    updateDate: '2023-08-16T16:50:39',
                },
                {
                    id: 5,
                    logTime: '2023-08-14T18:22:12',
                    type: 'INFO',
                    content:
                        'com.zetyun.sinkops.BatchOperation                            [] - updateAfter: {termostype=PCDH5WebViewController, productid=PCDH5WebViewController|mdButton_EventTouchUpInside:withEvent:, behaviorstatus=-, language=follow_system_zh-Hans-CN, userid=14936158510, refviewid=-, resolution=1290*2796, behaviortype=NebulaTech, alipayproductid=161BC41281604_IOS-uat1, user_sessionid=-, producertype=c, inner_version=-, utdid=Y41HzF2GQgcDAJduUmZToqle, lbslabel=-, cpu_max_freq=-, version=3, app_channel=-, requestid=-, thread_name=-, termtype=PCDH5WebViewController, subapplicationversion=-, server_location=ip=183.195.2.234^country=�й�^province=�Ϻ�^city=�Ϻ�^district=XX^isp=�ƶ�^header=H5-VM, analysis_code=348, alipayproductversion=7.2.8, seed=H5_AL_JSAPI_RESULT_ERROR, device_model=iPhone15 3, behaviorid=clicked, behaviorstatusmsg=https://20221004.uat1_mbank.bosc.com/fncD709Pro/redeem/reInput.html|https://20221004.uat1_mbank.bosc.com/fncD709Pro/redeem/reInput.html__Y41HzF2GQgcDAJduUmZToqle__OdpaFNh_, subapplicationid=20221004, total_mem=-, productversion=Adb22d7e658b88e6beb2c92009071dbac, network=WIFI|�й��ƶ�, viewid=-, lbslocation=-, hot_patch=-, exinfo3=jsapiName=getUserInfoEx^params=^code=1^msg=�ӿڲ�����, exinfo4=appId=20221004^version=0.0.0.55^url=https://20221004.uat1_mbank.bosc.com/fncD709Pro/redeem/reResult.html^referer=https://20211004.uat1_mbank.bosc.com/financial/financialList/home.html^h5Token=6ed3561fc2308fdee7fdd3fc19fc74a0^isEntrance=NO^refviewId=PCDH5WebViewController^h5SessionToken=2e6751f113f161d2a9a1aaedeef70261^log_release_type=ONLINE^sourceId=20211004^token=Adb22d7e658b88e6beb2c92009071dbac^isTinyApp=NO^viewId=PCDH5WebViewController^webViewVersion=WKWebView^mp_baseline=v10.2.3.11^mp_module=NebulaTech, exinfo1=https://20221004.uat1_mbank.bosc.com/fncD709Pro/redeem/reResult.html, exinfo2=-, os_version=16.0.3, productchannel=1000, log_time=2023-08-14 18:22:07.935, url=2, bundle_version=VoiceOver=0^TimeZone=Asia/Shanghai, tcid=Y41HzF2GQgcDAJduUmZToqle, awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-08-14 18:22:07:221, cpu_core_num=-, promotion=-, commit_ts=null, serialize_ts=null, etl_ts=1692008532103}',
                    createDate: '2023-08-16T16:50:40',
                    updateDate: '2023-08-16T16:50:40',
                },
                {
                    id: 6,
                    logTime: '2023-08-14T18:22:12',
                    type: 'ERROR',
                    content:
                        'com.zetyun.sinkops.KuduSinkAction                            [] - Exception',
                    createDate: '2023-08-16T16:50:41',
                    updateDate: '2023-08-16T16:50:41',
                },
                {
                    id: 7,
                    logTime: '2023-08-14T18:22:12',
                    type: 'ERROR',
                    content:
                        'com.zetyun.sinkops.KuduSinkAction                            [] - java.lang.NullPointerException',
                    createDate: '2023-08-16T16:50:41',
                    updateDate: '2023-08-16T16:50:41',
                },
                {
                    id: 8,
                    logTime: '2023-08-14T18:22:12',
                    type: 'ERROR',
                    content:
                        'com.zetyun.sinkops.KuduSinkAction                            [] - Exception',
                    createDate: '2023-08-16T16:50:42',
                    updateDate: '2023-08-16T16:50:42',
                },
            ],
            retmsg: 'success',
            retcode: 0,
        }
    },
}
