import prisma from "../config/prisma.js";
import bcrypt from 'bcrypt';

//이름으로 그룹 찾기
async function findByName(name) {
    return prisma.group.findUnique({
        where: {
            name,
        },
    });
}

//id로 그룹 찾기
async function findById(groupid) {
    return prisma.group.findUnique({
        where: {
            id: groupid,
        },
    });
}

//그룹 상세 목록 조회용 (id로 검사)
async function getDetail(group) {
    return prisma.group.findUnique({
        where: {
            id: group.id,
        },
        select: {
            id: true,
            name: true,
            isPublic: true,
            likeCount: true,
            postCount: true,
            Badge: {
                select: {
                    //공개 범위 id 제외용
                    name: true,
                    description: true,
                }
            },
            createdAt: true,
            password: false, // password 필드 제외
            introduction: true,
        },
    });
}

//비밀번호 일치 여부 확인
async function checkPassword(groupid, groupPassword) {
    return prisma.group.findFirst({
        where: {
            id: groupid,
            password: groupPassword,
        },
    });
}

//그룹 수정
async function updateGroup(group) {
    const existingGroup = await findById(group.id);

    return prisma.group.update({
        where: {
            id: group.id
        },
        data: {
            name: group.name || existingGroup.name,
            imageUrl: group.imageUrl || existingGroup.imageUrl,
            isPublic: group.isPublic !== undefined ? group.isPublic : existingGroup.isPublic,
            introduction: group.introduction || existingGroup.introduction,
        },
    });
}


//그룹 생성하기
async function save(group) {
    //비밀번호 해싱 작업
    const hashedPassword = await bcrypt.hash(group.password, 10);

    return prisma.group.create({
        data: {
            name: group.name,
            password: hashedPassword,
            isPublic: group.isPublic,
            imageUrl: group.imageUrl,
            likeCount: 0,
            postCount: 0,
            badgeCount: 0,
            introduction: group.introduction,
        },
    });
}

//그룹 목록 조회용 조건에 맞게 그룹 찾기
async function getGroups(pageSkip, pageTake, orderBy, name, publicCheck) {
    const groups = await prisma.group.findMany({
        where: {
            isPublic: publicCheck,
            ...(name && { name: { contains: name } })
            //조건 선택으로 where절 조회하기
            //-> name 변수가 존재하고, 그룹 이름에 name이 포함되어 있으면 where절 포함
            //반대로 둘 중 하나라도 false인 경우엔 where절에 포함되지 않음 -> 이름을 통한 검색 X
        },
        orderBy: orderBy || undefined,
        skip: pageSkip, //시작 페이지 번호
        take: pageTake, //한 페이지당 나타날 그룹 수 
        select: {
            id: true,
            name: true,
            isPublic: true,
            likeCount: true,
            postCount: true,
            badgeCount: true,
            createdAt: true,
            password: false, // password 필드 제외
            introduction: true,
        },
    });
    return groups;
}

//그룹 수 세기
async function countGroups(name, publicCheck) {
    const groups = prisma.group.count({
        where: {
            isPublic: publicCheck,
            ...(name & { name: { contains: name } }),
        },
    });
    return groups
}


//id를 통해 그룹 삭제하기
async function deleteGroupById(group) {
    const deletedGroup = await prisma.group.delete({
        where: {
            id: group.id,
        },
    });
    return deletedGroup;
}

//그룹 공감 누르기
async function pushLike(group) {
    const likeGroup = await prisma.group.update({
        where: {
            id: group.id,
        },
        data: {
            likeCount: group.likeCount + 1,
        },
    });
    return likeGroup;
}

async function updateBadgeCount(groupId) {
    const findCount = await prisma.badge.count({
        where: {
            groupId: groupId
        },
    });

    const updateCount = await prisma.group.update({
        where: {
            id: groupId
        },
        data: {
            badgeCount: findCount,
        },
    });

    return updateCount;
}


//공개 그룹인 그룹 가져오기
async function getPublic(groupId) {
    const foundGroup = await prisma.group.findUnique({
        where: {
            id: groupId,
        },
        select: {
            id: true,
            isPublic: true,
        },
    });
    return foundGroup;
}


export default {
    findByName,
    save,
    getDetail,
    getGroups,
    countGroups,
    updateGroup,
    findById,
    deleteGroupById,
    checkPassword,
    pushLike,
    getPublic,
    updateBadgeCount,
}