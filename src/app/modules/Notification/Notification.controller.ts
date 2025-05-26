
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { notificationServices } from "./Notification.service";


const sendNotification = catchAsync(async (req: any, res: any) => {
  const notification = await notificationServices.sendSingleNotification(req);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "notification sent successfully",
    data: notification,
  });
});

const sendNotifications = catchAsync(async (req: any, res: any) => {
  const notifications = await notificationServices.sendNotifications(req);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "notifications sent successfully",
    data: notifications,
  });
});

const getNotifications = catchAsync(async (req: any, res: any) => {
  const notifications = await notificationServices.getNotificationsFromDB(req);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Notifications retrieved successfully",
    data: notifications,
  });
});

const getSingleNotificationById = catchAsync(async (req: any, res: any) => {
  const notificationId = req.params.notificationId;
  const notification = await notificationServices.getSingleNotificationFromDB(
    req,
    notificationId
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Notification retrieved successfully",
    data: notification,
  });
});

const sendNotificationToMultipleUsers = catchAsync(async (req:any, res:any)=>{
  const userId = req.user.id
  const body = req.body
  const result = await notificationServices.sendNotificationToMultipleUsers(userId,body)
  
  sendResponse(res, {
   
      success:true,
      statusCode:200,
      message:"Notification sent to multiple users",
      data:result
    
  })
})

export const notificationController = {
  sendNotification,
  sendNotifications,
  getNotifications,
  getSingleNotificationById,
  sendNotificationToMultipleUsers
};
